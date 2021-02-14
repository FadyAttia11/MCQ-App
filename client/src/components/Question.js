import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../styles.css";

import NameApi from "../context/NameApi";
import QuestionsApi from "../context/QuestionsApi";
import CurrentQuesCountApi from "../context/CurrentQuesCountApi";
import TrueAnswersApi from "../context/TrueAnswersApi";

const Question = () => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  const { name, setName } = useContext(NameApi);
  const { questions, setQuestions } = useContext(QuestionsApi);
  const { count, setCount } = useContext(CurrentQuesCountApi);
  const { setTrueAnswers } = useContext(TrueAnswersApi);

  let history = useHistory();

  useEffect(() => {
    if (questions.length !== 0) {
      setQuestion(questions[count]);
    }
  }, [questions]);

  useEffect(() => {
    if (Object.keys(question).length !== 0) {
      setAnswers(question.answers);
    }
  }, [question]);

  useEffect(() => {
    if (count !== 0) {
      setQuestion(questions[count]);
    }
    if (count > 4) {
      history.push("/result");
    }
  }, [count]);

  const handleClickingAnswer = (answerNum) => {
    const userAnswer = answers[answerNum];
    console.log("answer cliked, the answer is: ", userAnswer);
    if (userAnswer === question.solution) {
      console.log("the answer is right");
      setTrueAnswers((prevState) => prevState + 1);
    } else {
      console.log("the answer is wrong");
    }
    setCount((prevState) => prevState + 1);
  };

  const handleStartingOver = () => {
    setName("");
    setQuestions([]);
    setCount(0);
    setTrueAnswers(0);
    history.push("/");
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Answer The Upcoming Questions</h1>
        <p>{name}, Answer 5 Questions and get your result now!</p>
      </div>
      <div className="container text-center">
        <h3>{question.title}</h3>
        <div className="mid-width">
          <button
            type="submit"
            className="btn btn-info btn-block mt-4"
            onClick={() => handleClickingAnswer(0)}
          >
            {answers[0]}
          </button>

          <button
            type="submit"
            className="btn btn-info btn-block"
            onClick={() => handleClickingAnswer(1)}
          >
            {answers[1]}
          </button>

          <button
            type="submit"
            className="btn btn-info btn-block"
            onClick={() => handleClickingAnswer(2)}
          >
            {answers[2]}
          </button>

          <button
            type="submit"
            className="btn btn-info btn-block"
            onClick={() => handleClickingAnswer(3)}
          >
            {answers[3]}
          </button>
        </div>

        <button onClick={handleStartingOver} className="btn btn-danger mt-5">
          Restart The MCQ Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Question;
