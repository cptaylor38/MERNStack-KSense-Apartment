const mongoose = require("mongoose");

const user = new mongoose.Schema({
  apartment: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", user);
