const mongoose = require("mongoose")

const MediaSchema = new mongoose.Schema({
        file: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
        },
        title: {
            type: String,
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("Media", MediaSchema);