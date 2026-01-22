var graficoModel = require("../models/graficoModel");

function buscar(req, res) {
    var quantiLivros = req.body.quantiLivros;
    var nome = req.body.nome;

    console.log(`Recuperando as ultimas medidas`);

    graficoModel.buscar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscar
}