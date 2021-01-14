import {combineReducers} from 'redux';

const reducer = combineReducers({
    quiz: quizReducer,
});

export default reducer;