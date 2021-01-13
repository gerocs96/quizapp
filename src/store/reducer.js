import * as actionTypes from './actions';

const initialState = {
    quiz:{
        id: 1,
        question: "What was the original name of Gibson guitars?",
        a: "Gibson Guitar Corporation",
        b: "Gibson Mandolin-Guitar Mfg. Co. Ltd.",
        c: "Gibson Brands, Inc.",
        d: "Gibson",
        correct: "b",
    }
    
};

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_QUIZ:
            return{
                ...state,

            }
        case actionTypes.REMOVE_QUIZ:
            return{

            }
        default:
            return state;
    }    
};

export default reducer;