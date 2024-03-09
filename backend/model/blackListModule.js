const mongoose = require("mongoose");

const blacklistTokenSchema = mongoose.Schema(
  {
    token: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const blacklistTokenModel = mongoose.model(
  "blacklistToken",
  blacklistTokenSchema
);
module.exports = { blacklistTokenModel };
