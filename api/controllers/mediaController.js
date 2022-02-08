const Media = require("../models/Media");

// * GET ONE OR SEVERAL MEDIA (by ID or by TYPE) *
module.exports.find_GET = async (req, res) => {
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

// * GET ALL MEDIA *
module.exports.findAll_GET = async (req, res) => {
    try {
        const media = await Media.find();
        res.status(200).json(media);
    } catch (err) {
        res.status(500).json(err);
    }
}


// * GET THE BROADCAST MEDIA *
module.exports.findBroadcast_GET = async (req, res) => {
    try {
        const media = await Media.findOne({ isBeingBroadcast: true });
        !media && res.status(404).json("Aucun média n'est actuellement diffusé."); // Si la requête ne renvoit aucun média
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

// * BROADCAST A MEDIA *
module.exports.broadcast_PUT = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);                                   // (1) Je récupère le média dont l'id est req.params.id
        await Media.updateMany({isBeingBroadcast: true}, {$set:{isBeingBroadcast: false}});  // (2) Je set la diffusion de tous les médias à false :
        // Si le champ isBeingBroadcast de media est false :
        if (!media.isBeingBroadcast) {
            await media.updateOne({ $set: { isBeingBroadcast: true } }) // Je le set à true
            res.status(200).json("Le média est maintenant diffusé.")
        } else {
            res.status(200).json("Aucun média n'est plus diffusé.")
        }
    } catch (err) {
        res.status(500).json(err);
    }
}