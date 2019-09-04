const toolsDataBase = require('../models/toolsModels');

module.exports = {

    async listar(req, res) {
        const { tag, page = 1 } = req.query;

        //Verifica se exite tag na rota
        if (tag) {
            let tool = await toolsDataBase.paginate({ tags: tag}, { page, limit: 5 })
            return res.json({ tool })
        }

        let tool = await toolsDataBase.paginate({}, { page, limit: 5 })
        return res.json({ tool })
    },

    async registrar(req, res) {
        const { title } = req.body;
        const toolExist = await toolsDataBase.findOne({ title });

        // verifica se já existe uma tools com o mesmo nome
        if (toolExist) {
            return res.status(200).send({ Exist: toolExist })
        }

        const tool = await toolsDataBase.create(req.body)

        return res.status(201).json({ tool })
    },

    async deletar(req, res) {
        const id = req.params.id;

        try {
            await toolsDataBase.findByIdAndDelete({ _id: id })
            return res.status(203).json({ toolsDataBase });

        } catch (error) {
            return res.status(500).json({ error });
        }

    },
}