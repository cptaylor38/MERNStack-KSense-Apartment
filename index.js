require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
var API_KEY = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(express.static(__dirname + "/public"));

// Define API routes here
app.post("/contactus", function (req, res) {
  const data = {
    from: `${req.body.name} <${req.body.email}>`,
    to: "Juventus F.C. <txjuventusfc@gmail.com>",
    subject: "New Website Contact",
    html: `From: ${req.body.name} <br /> <br /> <br /> Description: ${req.body.description} <br /><br /> ${req.body.email}`,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      throw error;
    } else {
      console.log(body);
      res.json({ message: "success" });
    }
  });
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
