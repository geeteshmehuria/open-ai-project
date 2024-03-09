const { JokesModel } = require("../model/jokesModel");
const { getJoke } = require("../utils/jokesUtil");
// const { NoteModule } = require("../model/noteModule");

const generate = async (req, res) => {
  try {
    let { items } = req.params;
    let result = await getJoke(items);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};

const createJokes = async (req, res) => {
  try {
    const joke = new JokesModel(req.body);
    await joke.save();
    res.send({ msg: "joke added successfully " });
  } catch (error) {
    console.log(`Error in creating a joke: ${error}`);
    res.send({ error: "Error in adding the joke" });
  }
};

const getJokes = async (req, res) => {
  try {
    const jokes = await JokesModel.find({ userId: req.body.userId });
    res.send({ jokes });
  } catch (error) {
    console.log(`Error in getting all Notes : ${error}`);
    res.status(401).send({ error: "Error in fetching data!" });
  }
};

const deleteJokes = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    await JokesModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ msg: "joke Delete successfully " });
  } catch (error) {
    return res.status(500).send({ msg: "Error Delete joke", error: error });
    console.log(error);
  }
};

module.exports = {
  createJokes,
  getJokes,
  deleteJokes,
  generate,
};
