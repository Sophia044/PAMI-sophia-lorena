
interface Livraria {
nomeLivro: string;
anoPublicacao: number;
autor: string;
}

//Utilizando a interface usuário fica assim:
function exibirLivro(Livro0: Livraria): void{
    console.log(`Livro: ${Livro0.nomeLivro}`);
    console.log(`AnoPublicacao: ${Livro0.anoPublicacao}`);
    console.log(`autor: ${Livro0.autor}`);
}

exibirLivro({ nomeLivro: 'Narnia', anoPublicacao: 1956, autor: 'C. S. Lewis'});

