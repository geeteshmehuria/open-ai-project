const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (await blacklistTokenModel.findOne({ token })) {
    return res.status(400).send({ msg: "Already logged out" });
  }
  if (token) {
    try {
      const decoded = jwt.verify(token, "openai");
      const { userID } = decoded;
      const user = await UserModel.findById({ _id: userID });
      if (user) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(400).send({ msg: "Please register first" });
      }
    } catch (error) {
      res.status(400).json({ msg: "You Don't have token" });
      console.log(error);
    }
  } else {
    res.json({ msg: "Please Login " });
  }
};
module.exports = {
  auth,
};
