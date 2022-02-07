const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        role: {
            type: Number,
            default: 0
        }
    }, { timestamps: true } // Pour ajouter des champs 'createdAt' et 'updatedAt' mis à jour automatiquement par Mongo
);

module.exports = mongoose.model("User", UserSchema);