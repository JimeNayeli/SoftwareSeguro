const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Calculadora Express");
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const sum = parseFloat(a) + parseFloat(b);
  res.json({ result: sum });
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) - parseFloat(b);
  res.json({ result: result });
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) * parseFloat(b);
  res.json({ result: result });
});

app.get("/divide", (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) / parseFloat(b);
  res.json({ result: result });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
