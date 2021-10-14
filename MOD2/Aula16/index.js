const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const db = require("./model/database");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => {
  res.json({ menssagem: "Olá" });
});

// app.get("/produto", async (req, res) => {
//   const produto = await Produto.findAll();
//   res.render("../views/produto", { produto: produto });
// });

// app.get("/deletarProduto/:id", async (req, res) => {
//   const produto = await Produto.findByPk(req.params.id);

//   await produto.destroy();

//   res.redirect("/produto");
// });

const rotaProduto = require("./controller/produtoRoutes");
app.use("/", rotaProduto);

db.conectado();
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
