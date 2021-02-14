import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles.css";

import QuestionsApi from "../context/QuestionsApi";
import NameApi from "../context/NameApi";

const Home = () => {
  const { name, setName } = useContext(NameApi);
  const { setQuestions } = useContext(QuestionsApi);

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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    history.push("/question");
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>MCQ App</h1>
        <p>Answer 5 Questions and get your result now!</p>
      </div>
      <div className="small-width text-center">
        <form onSubmit={(e) => handleSubmitForm(e)}>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="submit"
            className="btn btn-primary form-control mt-3"
            value="Start The MCQ Exam Now"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
