const Media = require("../models/Media");

// * GET A MEDIA *
module.exports.findOne_GET = async (req, res) => {
    // Query strings :
    const id = req.query.id;     // .../media?id=616ef78085e9a2...
    const type = req.query.type; // .../media?type="image"
    try {
        const media = id ?
            await Media.findById(id)    // Je fetch un media par son ID...
            :
            await Media.find({ type: type }); // ...ou plusieurs par leur type

        !media && res.status(404).json("Aucun média correspondant n'a été trouvé."); // Si la requête ne renvoit aucun média
        res.status(200).json(media);
    } catch (err) {
        res.status(500).json(err);
    }
}

// * INSERT A NEW MEDIA *
module.exports.create_POST = async (req, res) => {
    const newMedia = new Media(req.body)
    try {
        const savedMedia = await newMedia.save();
        res.status(200).json(savedMedia)
    } catch (err) {
        res.status(500).json(err)
    }
}

// * DELETE A MEDIA *
module.exports.delete_DELETE = async (req, res) => {
    const id = req.query.id;     // .../media?id=616ef78085e9a2...
    try {
        const media = await Media.findById(id);
        await media.deleteOne();
        res.status(200).json("Le média a été supprimé de la base de données.")
    } catch (err) {
        res.status(500).json(err);
    }
}