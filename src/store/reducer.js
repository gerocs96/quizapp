import * as actionTypes from './types';

let currentId = 1;

/* const initialState = {
    quizes:{
        id: 1,
        question: "What was the original name of Gibson guitars?",
        correct: "Gibson Mandolin-Guitar Mfg. Co. Ltd.",
        incorrect: [
            "Gibson Guitar Corporation",
            "Gibson Brands, Inc.",
            "Gibson"
        ]
    }    
}; */
const initialState = {
    quizes: [],
    currentItem: null,
}


const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_QUIZ:
            return{
                ...state,
                quizes: [...state.quizes, action.payload]
            }
        case actionTypes.REMOVE_QUIZ:
            return{
                quizes: [
                    ...state.quizes.filter(quizes => quizes !== action.payload)
                ]
            }
        case actionTypes.SHOW_QUIZ:
            return{
                quizes:[],
            }
        default:
            return state;
    }    
};

export default reducer;