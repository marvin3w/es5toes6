var pessoa = {nome: 'Ana', idade: 20};

// var nome = pessoa.nome,
//     idade = pessoa.idade;
var {nome, idade} = pessoa;
console.log(nome, idade);


// Detructuring #
var {nome: n, idade: i} = pessoa;
console.log(n, i);

// var genero = pessoa.genero,
// _pessoa$situacao = pessoa.situacao,
// situacao = _pessoa$situacao === undefined ? 'Ativa' : _pessoa$situacao;
var {genero, situacao = 'Ativa'} = pessoa;
console.log(genero, situacao);
