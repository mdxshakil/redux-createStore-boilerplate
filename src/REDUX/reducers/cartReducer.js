import { OneToFive, SixToTen } from "../actionTypes/actionTypes";

const initialState = {
    cart:[]
};

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case OneToFive:
        return {
            ...state,
            cart: action.payload
        }
        case SixToTen:
            return{
                ...state,
                cart: action.payload
            }
    
        default: return state;
    }
}

export default cartReducer;