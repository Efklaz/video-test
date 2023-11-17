import cl from "../App.module.css";
import React, { MutableRefObject, RefObject, useEffect} from "react";
import {State, TMoc} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {ADD, CLEAR, FILTER} from "../types/types";
import {fetchData, getData} from '../utilities/utilities';

type Props = {
    video : RefObject<HTMLVideoElement>,
    counter : MutableRefObject<number>,
};
function UnList({video, counter,}: Props) {
    const mocData = useSelector<State, TMoc[]>(state => state.mocData);
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchData());
    }, []);
    useEffect( () => {
        let handler = () => {
            const currentTime =  video.current?.currentTime;
            if(currentTime && mocData.length > 0 && mocData[counter.current]){
                const diff = (currentTime - mocData[counter.current].timestamp ) > 0;
                if(diff){
                    const width = mocData[counter.current].zone.width;
                    const height = mocData[counter.current].zone.height;
                    const left = mocData[counter.current].zone.left;
                    const top = mocData[counter.current].zone.top;
                    const endTime = mocData[counter.current].duration + mocData[counter.current].timestamp ;
                    dispatch({type : ADD , payload : {width, height, left, top, endTime}})
                    counter.current++;
                }
            }
            dispatch({type : FILTER , payload : currentTime})
        }
        video.current?.addEventListener('timeupdate', handler);
        return ()=>{
            video.current?.removeEventListener('timeupdate', handler);
        }
    });
    function clickHandler(e: React.MouseEvent<HTMLUListElement | HTMLLIElement>){
        const target = e.target as HTMLLIElement;
        const timestamp = Number(target.dataset.timestamp);
        const current  = Number(target.dataset.counter);
        dispatch({type : CLEAR})
        counter.current = current;
        if(video.current){
            video.current.currentTime = timestamp;
        }
    }
    return (
        <ul className={cl.list} onClick={clickHandler}>
            {mocData.map((el : TMoc, i : number)=>{
                return <li
                    key={i}
                    data-timestamp={el.timestamp}
                    data-counter={i}
                >{getData(el.timestamp)}</li>
            })}
        </ul>
    );
};
export const List = React.memo(UnList);
