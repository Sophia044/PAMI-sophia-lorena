//Declarações de variaveis
let nomeLivro: string = 'Narnia';
let anoPublicacao: number = 1956;
let autor: string = 'C. S. Lewis';

//Arrays
let numer0: number[] = [1956];
let nomesLivro: string [] = ['Narnia'];

//Interfaces - são usadas para definir estrutura de objetos
interface Livraria {
    nomeLivro: string;
    anoPublicacao: number;
    autor: string;
}

//Utilizar elas ficam assim:
let Livro0: Livraria = {
    nomeLivro: 'Narnia',
    anoPublicacao: 1956,
    autor: 'C. S. Lewis'
};