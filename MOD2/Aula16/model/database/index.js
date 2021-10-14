const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  { host: process.env.DB_HOST, port: process.env.DB_PORT, dialect: "postgres" }
);

async function conectado() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com o Banco de Dados!");
  } catch (error) {
    console.error("Erro de conexão com o Banco de Dados", error);
  }
}

module.exports = { sequelize, conectado };
