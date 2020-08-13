const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const pdf = require("html-pdf");
const cloudinary = require("cloudinary").v2;
var cors = require("cors");
const {
  SECRET_KEY,
  URI,
  NODEMAILER_PORT,
  NODEMAILER_SERVICE,
  SERVER_EMAIL,
  SERVER_PASS,
} = process.env;
const app = express();
const port = process.env.PORT || 5000;

const pdfTemplate = require("./PDFTemplate/pdfTemplate");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
  upload_preset: "images",
});

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());

//db
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose Database is Connected");
});

//schema
const Schema = mongoose.Schema;
const ApartmentSchema = new Schema({
  apartment: String,
  appliances: Array,
  bathone: Array,
  bathtwo: Array,
  bedone: Array,
  bedtwo: Array,
  bedthree: Array,
  dining: Array,
  kitchen: Array,
  living: Array,
  other: Array,
});

//model
const Apartment = mongoose.model("Apartment", ApartmentSchema);

//creating transport
const transporter = nodemailer.createTransport({
  service: NODEMAILER_SERVICE,
  port: NODEMAILER_PORT,
  secure: true,
  auth: {
    user: SERVER_EMAIL,
    pass: SERVER_PASS,
  },
});

// API calls
app.post(`/api/create/${SECRET_KEY}`, async (req, res) => {
  const client = req.body.bathone
    ? new Apartment(req.body)
    : new Apartment({
        apartment: req.body.apartment,
        email: req.body.email,
        appliances: [
          "Stove",
          "Range Hood",
          "Refrigerator",
          "Dishwasher",
          "Microwave",
          "Washing Maching",
          "Dryer",
          "Other",
        ],
        bathone: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Counters",
          "Sink, Faucet",
          "Shower/Tub, Faucet",
          "Drains, Plumbing",
          "Shower Door",
          "Toilet, Seat",
          "Caulking",
          "Towel Rack(s)",
          "Medicine Cab/Mirror",
          "Exhaust Fan",
          "Cabinet/Linen Closet",
          "Light Fixture(s), Bulb(s)",
          "Light Switches, Outlets",
          "Linen Closet/Cabinet",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Other",
        ],
        bathtwo: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Counters",
          "Counters",
          "Shower/Tub, Faucet",
          "Drains, Plumbing",
          "Shower Door",
          "Toilet, Seat",
          "Caulking",
          "Towel Rack(s)",
          "Medicine Cab/Mirror",
          "Exhaust Fan",
          "Cabinet/Linen Closet",
          "Light Fixture(s), Bulb(s)",
          "Light Switches, Outlets",
          "Linen Closet/Cabinet",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Other",
        ],
        bedone: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Light Switches, Outlets",
          "Closet Door(s)",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Furniture (if any)",
          "Other",
        ],
        bedtwo: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Light Switches, Outlets",
          "Closet Door(s)",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Furniture (if any)",
          "Other",
        ],
        bedthree: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Light Switches, Outlets",
          "Closet Door(s)",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Furniture (if any)",
          "Other",
        ],
        dining: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Light Switches, Outlets",
          "Light Fixture(s), Bulb(s)",
          "Door & Door Hardware",
          "Window(s) & Screen(s)",
          "Furniture (if any)",
          "Other",
        ],
        kitchen: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Counters",
          "Sink, Faucet",
          "Drain, Plumbing",
          "Garbage Disposal",
          "Light Fixture(s), Bulb(s)",
          "Light Switches, Outlets",
          "Door & Door Hardware",
          "Window(s) & Screens(s)",
          "Cabinets",
          "Other",
        ],
        living: [
          "Walls and Ceilings",
          "Floor/Floor Covering",
          "Light Fixture(s), Bulb(s)",
          "Light Switches, Outlets",
          "Closet Door(s)",
          "Door & Door Hardware",
          "Window(s) & Screens(s)",
          "Furniture (if any)",
          "Other",
        ],
        other: [
          "Entry Door(s)",
          "Furnace/Heater",
          "Air Conditioning",
          "Fireplace",
          "Balcony, Patio, Terrace",
          "Lawn, Ground Covering",
          "Garage or Parking Area",
          "Storage",
          "Water Heater",
          "Other",
        ],
      });
  const { apartment } = req.body;
  try {
    const data = await Apartment.findOne({ apartment });
    if (!data) {
      await client.save();
      console.log("Client Created");
      res.send(client);
    } else {
      console.log("Client already in database");
      res.status(409).send("Client already exists");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete(`/api/delete/${SECRET_KEY}/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    await Apartment.findByIdAndRemove({ _id: id });
    await res.status(200).send("Successfully deleted Client");
  } catch (err) {
    res.status(500).send(err);
  }
});
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
    res.status(400).send(err);
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
    res.status(400).send(err);
  }
});

app.post("/api/submitform", async (req, res) => {
  const mailOptions = {
    from: SERVER_EMAIL,
    to: req.body.contact.email,
    cc: req.body.email,
    subject: "Tenant Form",
    attachments: [
      {
        filename: "result.pdf",
        path:
          "/Users/graysonmcmurry/Desktop/MERNStack-KSense-Apartment/result.pdf",
        contentType: "application/pdf",
      },
    ],
  };
  await pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) console.log(err);
      else console.log("email sent");
    });
  });
});

app.post("/api/uploadImage", async (req, res, next) => {
  try {
    const array = Object.keys(req.body);
    const base64String = array[0];
    const string = base64String.replace(/ /g, "+");
    console.log(string);
    const uploadResponse = await cloudinary.uploader.upload(string, {
      format: "jpg",
      upload_preset: "images",
    });
    console.log(uploadResponse);
    await res.json(uploadResponse);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
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
