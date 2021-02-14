const mongoose = require("mongoose");
const random = require("mongoose-random");

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    answers: {
      type: Array,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

questionSchema.plugin(random, { path: "r" }); // by default `path` is `random`. It's used internally to store a random value on each doc.

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
