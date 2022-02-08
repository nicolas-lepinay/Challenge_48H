// Imports :
const express = require("express"); // Framework JS
const mongoose = require("mongoose"); // MongoDB
const dotenv = require("dotenv"); // Pour stocker les variables d'environnements
const helmet = require("helmet"); // Pour la sécurité HTTPS
const morgan = require("morgan"); // Pour les logs et résultats des requêtes
const multer = require("multer"); // Pour l'upload d'images

const app = express();

// Routes :
const authRoute = require("./routes/auth")
const mediaRoute = require("./routes/media")

dotenv.config();

// Mongoose :
mongoose.connect(
    process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("Connected to MongoDB...") }
);

// Serving files :
app.use(express.static('public')); 
app.use('/assets', express.static('assets'));
app.use('/media', express.static('media'));

// Middlewares :
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/auth", authRoute);
app.use("/api/media", mediaRoute);

// 🖼️ IMAGE UPLOADING 🖼️
const image_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/media/image");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
      },
});

const uploadImage = multer({ storage: image_storage });

app.post("/api/upload/image", uploadImage.single("file"), (req, res) => {
    try {
      return res.status(200).json("File has been uploaded successfully.");
    } catch (err) {
      console.error(err);
    }
  });

// 📽️ VIDEO UPLOADING 📽️
const video_storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "public/media/video");
  },
  filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
});

const uploadVideo = multer({ storage: video_storage });

app.post("/api/upload/video", uploadVideo.single("file"), (req, res) => {
  try {
    return res.status(200).json("File has been uploaded successfully.");
  } catch (err) {
    console.error(err);
  }
});


const port = 8800;

app.listen(port, () => {
    console.log("Backend server is running on port " + port + "...")
});