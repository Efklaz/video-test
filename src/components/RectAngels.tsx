import  React from 'react';
import {useSelector} from "react-redux";
import {State, TCurrent} from "../types/types";
export function RectAngels() {
    const rectAngels = useSelector<State, TCurrent[]>(state=> state.current)
    return (
        <>
            {rectAngels.map((el, i)=>{
                return <div key={i} style={{width: `${el.width}px`, height :`${el.height}px` , left : `${el.left}px`, top:`${el.top}px` , background:'green', position: "absolute"}}></div>
            })}
        </>
    );
};