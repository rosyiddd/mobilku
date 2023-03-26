const User = require("../models/User");
const resize = require('../sharp')

class UserService {
    async createUser(req, res) {
        try {
            const newUser = new User(req.body);
            const user = await newUser.save();
            resize(500, req.filename)
            resize(1000, req.filename)
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async getUser(req, res) {
        try {
            console.log(req.hostname)
            const user = await User.findById(req.params.id)
            const { createdAt, updatedAt, ...others } = user._doc
            res.status(200).json(others)
        } catch (error) {
            res.status(200).json({ message: error.message })
        }
    }

    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            const updatedUser = await User.findById(user.id)
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(200).json({ message: error.message })
        }
    }
}

module.exports = UserService