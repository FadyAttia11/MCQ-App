import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import NameApi from "../context/NameApi";
import QuestionsApi from "../context/QuestionsApi";
import CurrentQuesCountApi from "../context/CurrentQuesCountApi";
import TrueAnswersApi from "../context/TrueAnswersApi";

const Result = () => {
  const { name, setName } = useContext(NameApi);
  const { setQuestions } = useContext(QuestionsApi);
  const { setCount } = useContext(CurrentQuesCountApi);
  const { trueAnswers, setTrueAnswers } = useContext(TrueAnswersApi);

  let history = useHistory();

  const handleStartingOver = () => {
    setName("");
    setQuestions([]);
    setCount(0);
    setTrueAnswers(0);
    history.push("/");
  };

  return (
    <div>
      <h1>Congratz you just finished the MCQ Quiz Successfully</h1>
      <h2>
        {name}, Your Answered {trueAnswers} out of 5 Questions correctly
      </h2>
      <button onClick={handleStartingOver}>Start The MCQ Quiz Again</button>
    </div>
  );
};

export default Result;
