import { Container, Row, Col, Card, Image, Button, ListGroup, } from "react-bootstrap";
import api from "../communication/api";
import { useHistory, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Quiz = () => {
    //console.log(quizzes);
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [userScore, setUserScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const { quizName } = useParams();

    useEffect(() => {
        if(!questions.length > 0 ) {
            api.getQuiz(quizName).then((x) => {
                console.log(x);
                setQuestions(x);
            });
        }
    });


    let nextQuestion = (selectedChoice) => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setGameOver(true);
        }
        if (questions[currentIndex].answer === selectedChoice) {
            setScore(score + 1);
        }
    };

    let restartQuiz = () => {
        setCurrentIndex(0);
        setGameOver(false);
        setScore(0);
    };

    const saveScore = () => {
        let email = localStorage.getItem("customer");
        api.saveScore(email, quizName, score).then((x) =>
            history.push({ pathname: "/" })
        );
    };

    let shuffle = (choices) => {
        let array = choices.split(",");
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    };
    return (
        <>
            {questions.length > 0 ? (
                <Container>
                    {!gameOver ? (
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Image
                                        src={questions[currentIndex].picture}
                                    ></Image>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ListGroup>
                                        {shuffle(questions[currentIndex].choices).map((choice) => (
                                            <ListGroup.Item key={choice} onClick={() => nextQuestion(choice)}
                                                action variant="primary"> {choice}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>score: {score}</Col>
                            </Row>
                        </Container>
                    ) : (
                        ""
                    )}

                    {gameOver ? (
                        <Container>
                            <Card className="text-center">
                                <Card.Header>The quiz is over</Card.Header>
                                <Card.Body>
                                    <Card.Title>Score: {score}</Card.Title>
                                    <Card.Text>
                                        What do you want to do next?
                                    </Card.Text>
                                    <Button onClick={restartQuiz}>
                                        Restart
                                    </Button>
                                    {
                                        <Button onClick={saveScore}>
                                            Save Score
                                        </Button>
                                    }
                                    <Link to="/">
                                        {" "}
                                        <Button>Go Home</Button>{" "}
                                    </Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    2 days ago
                                </Card.Footer>
                            </Card>
                        </Container>
                    ) : (
                        ""
                    )}
                </Container>
            ) : (
                <div>Retrieving the quiz</div>
            )}
        </>
    );
};
export default Quiz;





/*

MY ORIGINAL CODE BELOW... CHANGED TO BE COMPATIBLE WITH PRACTICUMS IN CLASS
import questions from "../communication/questions.js";
import { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import api from "../communication/api";
import React from "react";



const Quiz = () => {
    const SIZE = questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);


    useEffect(() => {
        api.getQuiz(quizName).then(x => setCurrentQuestion(x));
    });

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
*/