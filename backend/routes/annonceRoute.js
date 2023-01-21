const express = require("express");
const Annonce = require("../models/annonceModel");
const {createAnnonce, getAllAnnonces, getAnnonce, deleteAnnonce, updateAnnonce} = require("../controllers/annonceController");
const router = express.Router();


//Create Annonce
router.post("/create", createAnnonce);
//get all annonces
router.get("/", getAllAnnonces)
//get Annonce
router.get("/:id", getAnnonce)
//delete Annonce
router.delete("/:id", deleteAnnonce)
router.patch("/:id", updateAnnonce)


module.exports = router