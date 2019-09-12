const userDB = require('../models/userModels')


const varredura = async (user, mail) => {
    let userExist = await userDB.find({ user })
    let mailExist = await userDB.find({ mail })

    if (userExist || mailExist) {
        return true;
    } else {
        return false;
    }
}


module.exports = {

    async cadastrar(req, res) {
        let { user, mail } = req.body;

        if (varredura(user, mail)) {
            return res.status(203).json({ erro: "usuario já cadastrado" })
        }

        let newUser = await userDB.create(req.body)
        newUser.password = "";

        return res.status(201).json({ newUser })
    },

    async login(req, res) {
        console.log("criar login")
        return res.status(201).json({ user: "criado" })
    }
}