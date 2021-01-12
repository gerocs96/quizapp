import './Quiz.css'; 

const Quiz = () => {
    return (
        <>
            <div className="quiz-container" id="quiz">
                <div className="quiz-header">
                    <h2 id="question">Question test</h2>
                    <ul>
                    <li>
                        <input type="radio" id="a" name="answer" className="answer" />
                        <label id="a_text" htmlFor="a">Question</label>
                    </li>
                    <li>
                        <input type="radio" id="b" name="answer" className="answer" />
                        <label id="b_text" htmlFor="b">Question</label>
                    </li>
                    <li>
                        <input type="radio" id="c" name="answer" className="answer" />
                        <label id="c_text" htmlFor="c">Question</label>
                    </li>
                    <li>
                        <input type="radio" id="d" name="answer" className="answer" />
                        <label id="d_text" htmlFor="d">Question</label>
                    </li>
                    </ul>
                </div>
                <button id="submit">Submit</button>
            </div>
        </>
    )
}

export default Quiz
