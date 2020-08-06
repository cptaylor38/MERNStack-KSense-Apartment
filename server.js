const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const { SECRET_KEY, URI } = process.env;
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Database Mongoose is Connected");
});

//schema
const Schema = mongoose.Schema;
const ApartmentSchema = new Schema({
  apartment: String,
});

//model
const Apartment = mongoose.model("Apartment", ApartmentSchema);

//dummy data
const data = {
  apartment: "cherrywood",
};

//creating new document
const newApartment = new Apartment(data);

// newApartment.save((error) => {
//   if (error) {
//     console.log("something happened while saving");
//   } else {
//     console.log("your data has been saved");
//   }
// });

// API calls
app.post(`/api/create/${SECRET_KEY}`, async (req, res) => {
  const client = new Apartment(req.body);
  try {
    await client.save();
    console.log("Client Created");
    res.send(client);
  } catch (err) {
    res.status(500).send(err);
  }
});

//! Not working
app.delete(`/api/delete/${SECRET_KEY}/:id`),
  async (req, res) => {
    const { id } = req.params;
    try {
      await Apartment.findByIdAndDelete(id);
      res.status(200).send("successfully deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  };

app.put(`/api/update/${SECRET_KEY}/:apartment`, async (req, res) => {
  const { apartment } = req.params;
  const opts = { new: true, upsert: true };
  const filter = { apartment };
  try {
    await Apartment.findOneAndUpdate(
      filter,
      { apartment: req.body.apartment },
      opts
    );
    await Apartment.save();
    console.log("Client Updated");
    res.send(Apartment);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/:apartment", async (req, res) => {
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  const apartment = req.params.apartment;
  try {
    const data = await Apartment.find({ apartment: apartment });
    await res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
