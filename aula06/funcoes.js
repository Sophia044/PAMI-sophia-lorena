//Função que retorna tipos
function saudação(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudação('Leandro'));
//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma função que retorna arrays e tem parametros opicionais
function listarNomes(nome) {
    nome.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos']);
