// Notação de Objeto #
var nome = 'Bia', anoNascimento = 1981;
function idade() {
   return new Date().getFullYear() - this.anoNascimento;
}
var pessoa = {
   nome: nome,
   anoNascimento: anoNascimento,
   idade: idade,
   toString: function() {return `${this.nome} = ${this.idade()}`;}
};
console.log(pessoa.toString());
