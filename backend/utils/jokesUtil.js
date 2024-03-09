const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getJoke = async (items) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: `Tell me a ${items} joke` }],
      model: "gpt-3.5-turbo",
    });
    const joke = chatCompletion.choices[0].message.content;
    console.log(joke);
    return joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    // throw error;
    console.log(error);
  }
};

module.exports = {
  getJoke,
};
