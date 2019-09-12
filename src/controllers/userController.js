const userDB = require('../models/userModels')

module.exports = {

    async cadastrar(req, res) {
        let { user, mail } = req.body;
        let userExist = await userDB.findOne({ user })
        let mailExist = await userDB.findOne({ mail })

        if (userExist) {
            return res.status(203).json({ userExist })
        }
        if (mailExist) {
            return res.status(203).json({ mailExist })
        }

        let newUser = await userDB.create(req.body)
        newUser.password = "";

        return res.status(201).json({ user: newUser })
    },

    async login(req, res) {
        let { user, password } = req.body;
        let userExist = await userDB.findOne({ user }).select("+password");

        if (!userExist) {
            return res.status(203).json({ erro: "user not found" })
        }
        if (userExist.password != password) {
            return res.status(203).json({  erro: "password invalid" })
        }

        return res.status(201).json({ user: userExist })
    }
}