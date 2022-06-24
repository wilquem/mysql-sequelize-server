const Inscricoes = require('../models/Inscricoes')

module.exports = {
    async index(req,res){
        const inscricoes = await Inscricoes.findAll();
        return res.json(inscricoes)
    },

    async findByid(req,res){
        const { id } = req.params;
        const inscricoes = await Inscricoes.findAll({
            where: {
                id: id
            }
        });
        return res.json(inscricoes)
    },

    async register(req,res){
        const { nome, senha } = req.body;
        const inscricoes = await Inscricoes.create({
            nome, senha
        });
        return res.json(inscricoes)
    },

    async delete(req,res){
        const { id } = req.params;
        const inscricoes = await Inscricoes.destroy({
            where: {
                id:id
            }
        });
        return res.json(inscricoes)
    },

    async edit(req,res){
        const {id, nome, senha } = req.body;
        const inscricoes = await Inscricoes.update({
            nome, senha
        }, {
            where: {
                id: id
            }
        });
        return res.json(inscricoes)
    },
}