const mongoose = require("mongoose");

const jokesSchema = mongoose.Schema(
  {
    result: { type: String, required: true },
    userID: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const JokesModel = mongoose.model("jokes", jokesSchema);
module.exports = { JokesModel };
