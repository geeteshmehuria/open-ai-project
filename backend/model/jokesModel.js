const mongoose = require("mongoose");

const jokesSchema = mongoose.Schema(
  {
    body: { type: String, required: true },
    userId: { type: String, required: true },
    authors: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const JokesModel = mongoose.model("jokes", jokesSchema);
module.exports = { JokesModel };
