const express = require("express");
const Question = require("../models/question");
const router = new express.Router();

router.get("/api/", async (req, res) => {
  console.log("backend is working");
});

router.get("/api/questions/all", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.send(questions);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

// router.get("/", async (req, res) => {
//     console.log("backend is working");
//     const title = "how can you do that?";
//     const answers = [
//       {
//         id: "8759847324",
//         answer: "by playing football",
//       },
//       {
//         id: "235435345",
//         answer: "by not doing anything",
//       },
//       {
//         id: "5345234342",
//         answer: "i dont know",
//       },
//     ];
//     const solution = "by playing football";

//     const question = new Question({
//       title,
//       answers,
//       solution,
//     });

//     try {
//       await question.save();
//       res.status(201).send({ question });
//     } catch (e) {
//       res.status(400).send(e);
//     }
//   });
