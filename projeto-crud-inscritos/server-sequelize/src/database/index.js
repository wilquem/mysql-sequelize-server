const Sequelize = require('sequelize');
const dbConfig = require('../config/database')
const Inscricoes = require('../models/Inscricoes')

const connection = new Sequelize(dbConfig)

Inscricoes.init(connection)

module.exports = connection