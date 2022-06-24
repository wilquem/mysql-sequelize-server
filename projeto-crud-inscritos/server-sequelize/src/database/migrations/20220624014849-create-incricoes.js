'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('inscricoes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull:false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    
  }
};
