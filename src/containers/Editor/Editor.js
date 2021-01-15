import './Editor.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { db } from '../../firebase_config';
import firebase from 'firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Editor = () => {
    const [questionInput, setQuestionInput] = useState("");
    const [trueInput, setTrueInput] = useState("");
    const [false1Input, setFalse1Input] = useState("");
    const [false2Input, setFalse2Input] = useState("");
    const [false3Input, setFalse3Input] = useState("");  


    const addQuiz = (e) => {
        e.preventDefault();
        //console.log("adding quiz");

        if (false1Input.trim() && false2Input.trim() && false3Input.trim() && questionInput.trim() && trueInput.trim()) {
            db.collection("quizes").add({            
            answer1: false1Input,
            answer2: false2Input,
            answer3: false3Input,
            answer4: trueInput,
            correct: trueInput,
            question: questionInput,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(() => {
                alert("Quiz added.");
            }).catch((error) => {
                alert(error.message);
            });

            setQuestionInput("");
            setTrueInput("");
            setFalse1Input("");
            setFalse2Input("");
            setFalse3Input("");
        }
        else
            alert("all fields are required");
    }

    const cancelQuiz = (e) => {
        e.preventDefault();
        //console.log("cancelling quiz");

        setQuestionInput("");
        setTrueInput("");
        setFalse1Input("");
        setFalse2Input("");
        setFalse3Input("");
    }

    const [quizes, setQuizes] = useState([]);
    useEffect(() => {
        getQuiz();
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
                }))
            );
        });
    }

    const delQuiz = (id) => {
        db.collection("quizes").doc(id).delete();
        alert('Quiz deleted.');
    }


    return (
        <div className="Editor">
            <h1>Quiz Editor</h1>
            <p>Here you can add questions and answers.</p>

            <form className="Form" action="">
                <section>   
                    <label htmlFor="">Write the <span>question</span> here: </label>
                    <TextField id="outlined-basic" label="Question" name="question" variant="outlined" value={questionInput} onChange={(e) => {
                    setQuestionInput(e.target.value);}}/>
                </section>

                <section>
                    <label htmlFor="">Write <span>correct</span> answer here: </label>
                    <TextField id="outlined-basic" label="Answer" name="true" variant="outlined" value={trueInput} onChange={(e) => {
                    setTrueInput(e.target.value);}}/>
                </section>

                <section>
                    <label htmlFor="">Write <span>false</span> answer here: </label>
                    <TextField id="outlined-basic" label="Answer" name="false1" variant="outlined" value={false1Input} onChange={(e) => {
                    setFalse1Input(e.target.value);}}/>
                </section>

                <section>
                    <label htmlFor="">Write <span>false</span> answer here: </label>
                    <TextField id="outlined-basic" label="Answer" name="false2" variant="outlined" value={false2Input} onChange={(e) => {
                    setFalse2Input(e.target.value);}}/>
                </section>

                <section>
                    <label htmlFor="">Write <span>false</span> answer here: </label>
                    <TextField id="outlined-basic" label="Answer" name="false3" variant="outlined" value={false3Input} onChange={(e) => {
                    setFalse3Input(e.target.value);}}/>
                </section>
                
                <div className="Buttons">
                    <Button variant="contained" type="submit" onClick={addQuiz} style={{color: "whitesmoke", backgroundColor: "#000c46"}}>Add</Button>
                    <Button variant="contained" color="secondary" onClick={cancelQuiz} tyle={{color: "whitesmoke"}}>Clear</Button>
                </div>
            </form>             
            <h2>Questions</h2>
            <Table aria-label="customized table" style={{minWidth: "60vw"}}>
                <TableHead>
                    <TableRow style={{fontWeight: "bold"}}>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Question</TableCell>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Answer 1</TableCell>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Answer 2</TableCell>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Answer 3</TableCell>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Answer 4</TableCell>
                        <TableCell align="center" style={{minWidth: "100px", fontWeight: "bold"}}>Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {quizes.map((data) => {
                            return(
                                <TableRow key={data.id}>
                                    <TableCell align="left">{data.question}</TableCell>
                                    <TableCell align="left">{data.answer1}</TableCell>
                                    <TableCell align="left">{data.answer2}</TableCell>
                                    <TableCell align="left">{data.answer3}</TableCell>
                                    <TableCell align="left">{data.answer4}</TableCell>
                                    <TableCell align="left"><Button onClick={() => delQuiz(data.id)}><DeleteIcon style={{color: "black"}}/></Button></TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Editor