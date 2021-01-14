import * as actionTypes from './types';

export const addQuiz = (itemId) => {
    return {
        type: actionTypes.ADD_QUIZ,
        payload: {
            id: itemId
        }
    };
};

export const removeQuiz = (itemId) => {
    return {
        type: actionTypes.REMOVE_QUIZ,
        payload: {
            id: itemId
        }
    };
};

export const showQuiz = (item) => {
    return{
        type: actionTypes.SHOW_QUIZ,
        payload: item,
    };
};