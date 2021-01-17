import './Quiz.css';
import { db } from '../../firebase_config';
import { useState, useEffect } from 'react';

const Quiz = () => {
    const [quizes, setQuizes] = useState([]);
    useEffect(() => {
        getQuiz();
        console.log(quizes);
    }, [])    

    const getQuiz = () => {
        db.collection("quizes").onSnapshot(function(querySnapshot){
            setQuizes(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    question: doc.data().question,
                    answer1: doc.data().answer1,
                    answer2: doc.data().answer2,
                    answer3: doc.data().answer3,
                    answer4: doc.data().answer4,
                    correct: doc.data().correct,
                }))
            );
        });
    }

    const [showUI, setShowUI] = useState(true);
    const [currentScore, setCurrentScore] = useState(0);
    const checkAnswer = (e) => {
         if (e) {
            console.log(currentScore); 
            const nextScore = currentScore + 1;
            setCurrentScore(nextScore);
            console.log(currentScore); 
        }
        setShowUI(false);
    }

   
    const [showScore, setShowScore] = useState(false);

    const [currentQuiz, setCurrentQuiz] = useState(0);
    const showNext = () =>{
        if (!showUI) {
            setShowUI(true);
            if (currentQuiz < quizes.length - 1 ) {
                const nextQuiz = currentQuiz + 1;
                setCurrentQuiz(nextQuiz);
            }
            else setShowScore(true);
        }
        else alert("Select an answer.");
    }

    return(quizes.length < 1 ? (
                <h3>No questions.</h3>
            ) : (
                showScore ? (
                    (
                        <div><h2>Your score: {currentScore}</h2></div>
                    )
                ) : (<div className="quiz-container" id="quiz">
                    <div className="quiz-header">
                        <h2 id="question">{quizes[currentQuiz].question}</h2>
                        {showUI ? (
                            <div className="Answers">
                                <div className="Answer" onClick={() => checkAnswer(false)}>{quizes[currentQuiz].answer1}</div>
                                <div className="Answer" onClick={() => checkAnswer(false)}>{quizes[currentQuiz].answer2}</div>
                                <div className="Answer" onClick={() => checkAnswer(false)}>{quizes[currentQuiz].answer3}</div>
                                <div className="Answer" onClick={() => checkAnswer(true)}>{quizes[currentQuiz].answer4}</div>
                            </div>
                        ) : (
                            <div className="Score">
                                <p>Correct answer: {quizes[currentQuiz].answer4}</p>
                                <p>Current score: {currentScore}</p>
                            </div>    
                        )}
                    </div>
                    <button id="submit" onClick={showNext}>Next</button>
                </div>    
                )
            )
    )
}

export default Quiz
