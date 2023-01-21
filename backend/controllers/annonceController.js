const Annonce = require("../models/annonceModel");


//Create Annonce
const createAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.create(req.body);
        res.status(200).json(annonce);

    } catch (e) {
        res.status(500).json({msg: e.message})
        console.log(e)
    }
};

//get all annonces
const getAllAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.find();
        res.status(200).json(annonces);
    } catch (e) {
        res.status(500).json({msg: e.message});
    }
}

const getAnnonce = async (req, res) => {

    try {
        const {id} = req.params;
        const annonce = await Annonce.findById(id);
        if (!annonce) {
            return res.status(404).json(`No annonce with id: ${id}`);
        }
        res.status(200).json(annonce);
    } catch (e) {
        res.status(500).json({msg: e.message});
    }
}

const deleteAnnonce = async (req, res) => {
    try {
        const {id} = req.params;
        const annonce = await Annonce.findByIdAndDelete(id)
        if (!annonce) {
            return res.status(404).json(`No annonce with id: ${id}`);
        }
        res.status(200).send("Annonce deleted");

    } catch (e) {
        res.status(500).json({msg: e.message});
    }
}

const updateAnnonce = async (req, res) => {
    try {
        const {id} = req.params;
        const annonce = await Annonce.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        )
        if (!annonce) {
            return res.status(404).json(`No annonce with id: ${id}`);
        }
        res.status(200).send("Annonce updated");

    } catch (e) {
        res.status(500).json({msg: e.message});
    }

}


module.exports = {createAnnonce, getAllAnnonces, getAnnonce, deleteAnnonce, updateAnnonce}