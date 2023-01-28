const express = require("express");
const {getAllUsers, deleteUser, updateUser} = require ("../controllers/user.controller")
const {authJwt} = require("../middlewares");
const router = express.Router();

router.get("/",[authJwt.verifyToken, authJwt.isAdmin], getAllUsers)
router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteUser)
router.patch("/:id",[authJwt.verifyToken, authJwt.isModerator], updateUser)

module.exports = router