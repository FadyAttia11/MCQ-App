import { React, useContext } from "react";
import { useHistory } from "react-router-dom";

import NameApi from "../context/NameApi";
import QuestionsApi from "../context/QuestionsApi";
import CurrentQuesCountApi from "../context/CurrentQuesCountApi";
import TrueAnswersApi from "../context/TrueAnswersApi";

const Restarting = () => {
  const { setName } = useContext(NameApi);
  const { setQuestions } = useContext(QuestionsApi);
  const { setCount } = useContext(CurrentQuesCountApi);
  const { setTrueAnswers } = useContext(TrueAnswersApi);

  let history = useHistory();

  setName("");
  setQuestions([]);
  setCount(0);
  setTrueAnswers(0);
  history.push("/");
};

export default Restarting;
