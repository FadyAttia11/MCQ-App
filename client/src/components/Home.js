import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import QuestionsApi from "../context/QuestionsApi";
import NameApi from "../context/NameApi";

const Home = () => {
  const { name, setName } = useContext(NameApi);
  const { questions, setQuestions } = useContext(QuestionsApi);

  let history = useHistory();

  useEffect(() => {
    const getRandom5Questions = async () => {
      const questions = await axios
        .get("/api/questions/random5")
        .then((response) => response.data);
      setQuestions(questions);
    };
    getRandom5Questions();
  }, []);

  useEffect(() => {
    if (questions.length !== 0) {
      console.log("have just gotten questions: ", questions);
    }
  }, [questions]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    history.push("/question");
  };

  return (
    <div>
      <h1>MCQ App</h1>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type="submit" value="Start The MCQ Exam Now" />
      </form>
    </div>
  );
};

export default Home;
