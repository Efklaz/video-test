export type TCurrent = {
    left : number,
    top : number,
    width : number,
    height : number,
    endTime : number,
}
export type TMoc = {
    timestamp : number,
    duration : number,
    zone : {
        left : number,
        top : number,
        width : number,
        height : number
    }
}
export type State =  {
    mocData : TMoc[],
    current : TCurrent[],
}
export type Action =  {
    type: string,
    payload?: any,
}
export const ADD = 'ADD';
export const INIT = 'INIT';
export const CLEAR = 'CLEAR';
export const FILTER = 'SET_COUNTER';