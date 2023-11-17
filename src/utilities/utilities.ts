import {AppThunk, RootState} from "../store";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AnyAction} from "redux";
import {INIT, TMoc} from "../types/types";

export function fetchData() : AppThunk<Promise<void>>{
    return async (dispatch : ThunkDispatch<RootState, unknown, AnyAction>)=>{
        const date =  await fetch('https://run.mocky.io/v3/085041d6-c0a5-4d4c-8ba9-829a0212d75b', {
            headers : {
                'Accept' : 'application/json'
            }
        })
        const result: TMoc[] = await date.json();
        result.sort((a , b )=>{
            return a.timestamp - b.timestamp;
        })
        dispatch({type : INIT, payload : result })
    }
}
export function getData(seconds: number){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}:${String(milliseconds).padStart(4, '0')}`;
}