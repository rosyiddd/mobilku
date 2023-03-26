const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    mobile: {
      type: Number
    },
    usia: {
      type: Number
    },
    image: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    education: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
