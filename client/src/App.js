import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

import QuestionsApi from "./context/QuestionsApi";
import NameApi from "./context/NameApi";
import CurrentQuesCountApi from "./context/CurrentQuesCountApi";
import TrueAnswersApi from "./context/TrueAnswersApi";

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);

  const [count, setCount] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(0);

  return (
    <QuestionsApi.Provider value={{ questions, setQuestions }}>
      <NameApi.Provider value={{ name, setName }}>
        <CurrentQuesCountApi.Provider value={{ count, setCount }}>
          <TrueAnswersApi.Provider value={{ trueAnswers, setTrueAnswers }}>
            <Router>
              <Routes />
            </Router>
          </TrueAnswersApi.Provider>
        </CurrentQuesCountApi.Provider>
      </NameApi.Provider>
    </QuestionsApi.Provider>
  );
};

export default App;
