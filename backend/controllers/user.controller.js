const User = require("../models/user.model");
const Annonce = require("../models/annonce.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({msg: e.message});
    }
}
const deleteUser = async (req,res) =>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json(`No user with id: ${id}`)
        }
        res.status(200).send("user deleted!")
    }catch (e) {
        res.status(500).json({msg: e.message});
    }
}
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        )
        if (!user) {
            return res.status(404).json(`No user with id: ${id}`);
        }
        res.status(200).send("User updated");

    } catch (e) {
        res.status(500).json({msg: e.message});
    }

}
module.exports = { getAllUsers,deleteUser,updateUser}