module.exports = {

    async cadastrar(req, res) {
        return res.status(201).json({user: "criado"})
    },

    async login(req, res) {
        return res.status(201).json({user: "criado"})
    }
}