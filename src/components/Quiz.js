import questions from "../communication/questions.js";
import { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import React from "react";



const Quiz = () => {
    const SIZE = questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);

    const updateAnswerOnClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        } else {
        }
        const getNextQuestion = currentQuestion + 1;
        if (getNextQuestion < questions.length) {
            setCurrentQuestion(getNextQuestion);
        } else {
            setFinish(true);
        }
    };

    let shuffle = (a) => {
        let j, k;
        for (let i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            k = a[i];
            a[i] = a[j];
            a[j] = k;
        }
        console.log("shuffled");
    }

    useEffect(() => {
        shuffle(questions);
    }, []);

    if (finish) {
        return (
            <div>
                You scored {score} out of {SIZE}
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <div>
                        <p>Your current score is : {score} </p>
                        <p>Question {currentQuestion + 1}/{SIZE}</p>
                    </div>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={questions[currentQuestion].imageSource}
                        />
                    </Figure>
                </div>
                <div>
                    {questions[currentQuestion].Options.map((Option) => (
                        <button onClick={() => updateAnswerOnClick(Option.isCorrect)}>{Option.ans}</button>
                    ))}
                </div>
            </div>
        );
    }
}
export default Quiz;