var database = require("../database/config");

function buscar(quantiLivros, nome) {

    var instrucaoSql = `
    select sum(l.${quantiLivros}/) as Quantidade,
        g.nome as Nome from livro as l 
        join genero as g on g.id = l.fkGenero
        group by ${nome};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}