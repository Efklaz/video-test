import {Action, ADD, CLEAR, FILTER, INIT, State} from "../types/types";
const initialState: State = {
    mocData: [],
    current : [],
};
function rootReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case INIT:
            return { ...state, mocData : action.payload};
        case FILTER:
            return { ...state, current : state.current.filter(e=> {
                    if(action.payload){
                        return (e.endTime - action.payload) > 0;
                    }
                })};
        case ADD:
            return { ...state, current : [...state.current, action.payload]};
        case CLEAR:
            return { ...state, current: [] };
        default:
            return state;
    }
}
export default rootReducer;
