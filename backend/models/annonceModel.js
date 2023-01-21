const mongoose =  require("mongoose")

const annonceSchema = mongoose.Schema(
    {
        region: {
            type: String,
            required: [true, "Please add an annonce"]
        },
        description: {
            type: String,
            required: [true, "Please add the desciption of your house"]
        },
        nbPiece: {
            type: Number,
            required: [true, "Please add the number of pieces"]
        },
        price: {
            type: Number,
            required: [true, "Please add the price"]
        },
        pictures: {
            type: String,
            required: [true, "Please add the pictures"]
        },


    },
    {
        timestamps: true,
    }
);

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;