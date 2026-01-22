var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/buscar", function (req, res) {
    graficoController.buscar(req, res);
});

Module.exports = router;