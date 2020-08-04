const mongoose = require("mongoose");
const URI =
  "mongodb+srv://new-user:new-user123@ksense-cluster.ocq25.mongodb.net/<dbname>?retryWrites=true&w=majority";
const connectDB = async (err) => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database has been connected!");
  } catch {
    console.log(err);
  }
};

module.exports = connectDB;
