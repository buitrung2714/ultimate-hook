import { TOGGLE_LOG } from "./types";

export const authReducer = (state,action) => {
    const {type,payload} = action;

    switch (type) {
        case TOGGLE_LOG:
            return !payload;

        default:
            return state; 
    }
}