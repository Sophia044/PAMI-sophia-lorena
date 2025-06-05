//Utilizando a interface usuário fica assim:
function exibirLivro(Livro0) {
    console.log("Livro: ".concat(Livro0.nomeLivro));
    console.log("AnoPublicacao: ".concat(Livro0.anoPublicacao));
    console.log("autor: ".concat(Livro0.autor));
}
exibirLivro({ nomeLivro: 'Narnia', anoPublicacao: 1956, autor: 'C. S. Lewis' });
