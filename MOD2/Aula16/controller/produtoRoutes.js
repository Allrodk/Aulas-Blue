const express = require("express");
const router = express.Router();
const Produto = require("../model/produto");

// Lista todos os produtos do DB
router.get("/produto", async (req, res) => {
  const produto = await Produto.findAll();
  res.render("../views/produto", { produto: produto });
});

// app.post('/cargocriar', async (req,res) =>{
//   const { nome, descricao, setor} = req.body;
//   const cargo = await Cargo.create({
//       Nome:nome,
//       Descriçao:descricao,
//       Setor:setor,
//   });
//   res.redirect("/cargo");
// });

router.get("/editarProduto/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  res.render("../views/editarProduto", { produto: produto });
});

router.post("/editarProduto/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const { nome, peso, valor } = req.body;

  produto.nome = nome;
  produto.peso = peso;
  produto.valor = valor;

  await produto.save();
  res.redirect("/produto");
});

router.get("/deletarProduto/:id", async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);

  await produto.destroy();

  res.redirect("/produto");
});

module.exports = router;
