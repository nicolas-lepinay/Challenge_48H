// Imports :
const express = require("express"); // Framework JS
const mongoose = require("mongoose"); // MongoDB
const dotenv = require("dotenv"); // Pour stocker les variables d'environnements
const helmet = require("helmet"); // Pour la sécurité HTTPS
const morgan = require("morgan"); // Pour les logs et résultats des requêtes
const multer = require("multer"); // Pour l'upload d'images
const ytdl = require('ytdl-core'); // Youtube download
const request = require('request');
const fs = require('fs');

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

// YOUTUBE DOWNLOAD :

/**
 * @param uri URL de la video
 * @param filename Nom du nouveau fichier
 * @param callback Fonction appelée à la fin du telechargement
 */
 const download = (uri, filename, callback) =>{
  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);
    // Téléchargement du média
    request(uri).pipe(fs.createWriteStream(`public/media/video/${filename}`)).on('close', callback);
  });
};

app.post('/api/youtube_download', async (req, res) => {
  // Recupere les infos de la vidéo
  const info = await ytdl.getInfo(req.query.url);
  // Qualités voulues (Exemple: si tu veux du 480p, tu l'ajoutes dans le tableau)
  const qualities = ["1080p60", "720p"]
  let codec = null;
  // Cherche l'url de la video avec codec audio et video
  for (const quality of qualities) {
      codec = info.formats.find(x =>x.audioCodec &&  x.qualityLabel == quality);
      if (codec) break;
  }
  if (codec) {
      // on retire les caractères spéciaux :
      // const title = info.videoDetails.title.replace(/[^a-zA-Z ]/g, "");

      // on lance le téléchargement :
      // download(codec.url, `${title}.mp4`, () => {
      //     console.log(`${title} downloaded !!`);
      // });
      
      const filename = req.body.filename;

      download(codec.url, `${filename}.mp4`, () => {
        console.log(`${filename} a été téléchargé sur le serveur.`);
      });
  } 
  console.log('Done, check result');
  res.send(200);
});


// --- END YOUTUBE DOWLOAD ---


const port = 8800;

app.listen(port, () => {
    console.log("Backend server is running on port " + port + "...")
});