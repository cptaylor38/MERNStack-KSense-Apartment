require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
// const API_KEY = process.env.MAILGUN_API_KEY;
// const DOMAIN = process.env.MAILGUN_DOMAIN;
// const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
const MongoClient = require("mongodb").MongoClient;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASS = process.env.MONGODB_PASS;
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@ksense-cluster.ocq25.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Define API routes here
app.post("/contactinfo", function (req, res) {
  console.log(req.body);
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
