import Quiz from './Quiz/Quiz';
import {connect} from 'react-redux';

const Quizes = () => {
    return (
        <div>
            <Quiz/>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        quizes: state.quiz.quizes,
    }
}

export default connect(mapStateToProps)(Quizes)
