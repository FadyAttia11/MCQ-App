const express = require("express");
const Question = require("../models/question");
const router = new express.Router();

//Add New Question
router.post("/api/questions/new", async (req, res) => {
  const question = new Question({
    ...req.body,
  });
  try {
    await question.save();
    res.status(201).send(question);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get All Questions
router.get("/api/questions/all", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.send(questions);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get Random 5 Questions
router.get("/api/questions/random5", async (req, res) => {
  try {
    const random5 = await Question.findRandom().limit(5);
    res.send(random5);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
