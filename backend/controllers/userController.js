const { blacklistTokenModel } = require("../model/blackListModule");
const { UserModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        res.status(400).send({ error: err });
      } else {
        const user = new UserModel({
          name,
          email,
          password: hash,
        });
        await user.save();
        res.status(200).send({ message: "user created successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, "openai", {
            expiresIn: "7d",
          });
          res
            .status(200)
            .send({ msg: "Login Successful", token: token, name: user.name });
        } else {
          res
            .status(400)
            .send({ msg: "Please register first, wrong Credential" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ error: "err" });
  }
};

// const logout = async (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   try {
//     const blacklistToken = await blacklistTokenModel.findOne({ token });
//     if (blacklistToken) {
//       res.status(400).send({ msg: "Already logged out" });
//     } else {
//       const blacklist = new blacklistTokenModel({ token });
//       await blacklist.save();
//     }
//   } catch (error) {
//     res.status(500).send({ error: "err" });
//   }
// };
const logout = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const blacklistToken = await blacklistTokenModel.findOne({ token });
    if (blacklistToken) {
      res.status(400).send({ msg: "Already logged out" });
    } else {
      const blacklist = new blacklistTokenModel({ token });
      await blacklist.save();
      res.status(200).send({ msg: "Logout successful" }); // Added response for success
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { register, login, logout };
