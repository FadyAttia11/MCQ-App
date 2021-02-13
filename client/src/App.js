import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const getAllQuestions = async () => {
      const questions = await axios
        .get("/api/questions/all")
        .then((response) => response.data);
      setQuestions(questions);
    };
    getAllQuestions();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <h1>MCQ App</h1>
    </div>
  );
};

export default App;
