const { Sequelize, DataTypes } = require("sequelize");
const database = require("./database");

const Produto = database.sequelize.define(
  "produto",
  {
    codigo_barras: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: { type: Sequelize.STRING, allowNull: false },
    peso: { type: Sequelize.FLOAT, allowNull: false },
    valor: { type: Sequelize.FLOAT, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Produto;
