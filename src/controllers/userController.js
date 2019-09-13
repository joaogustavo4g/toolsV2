require('dotenv/config');
const userDB = require('../models/userModels')
const jwt = require("jsonwebtoken");

// gerando token
function genToken(params = {}) {
    return jwt.sign(params, process.env.AUTH, {
        expiresIn: 86400,
    });
}

module.exports = {

    async cadastrar(req, res) {
        let { user, mail } = req.body;
        let userExist = await userDB.findOne({ user })
        let mailExist = await userDB.findOne({ mail })

        if (userExist) {
            return res.status(203).json({ erro: "user already exist" })
        }
        if (mailExist) {
            return res.status(203).json({ erro: "existing email" })
        }

        let newUser = await userDB.create(req.body)
        newUser.password = "";

        return res.status(201).json({ user: newUser, token: genToken({ id: user._id }) })
    },

    async login(req, res) {
        let { user, password } = req.body;
        let userExist = await userDB.findOne({ user }).select("+password");

        if (!userExist) {
            return res.status(203).json({ msg: "User not found" })
        }
        if (userExist.password != password) {
            return res.status(203).json({ msg: "invalid password" })
        }

        return res.status(201).json({ user: userExist, token: genToken({ id: user._id }) })
    },

    // Parte administrativa
    async upgrade(req, res) {
        let { user } = req.query;
        let newStatus = await userDB.findOne({ user });
        newStatus.isAdmin = true;
        newStatus.save();
        return res.status(200).json({ newStatus });
    },

    async deletar(req, res) {
        let { id } = req.query;
        await userDB.findByIdAndDelete({ user });
        if (await userDB.findById({ id })) {
            return res.status(200).json({ msg: "error deleting" });
        }
        return res.status(200).json({ msg: "Successfully deleted" });
    }
}