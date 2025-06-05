//Declarações de variaveis
let nomeLivro: string = 'Narnia';
let anoPublicacao: number = 2002;
let autor: string = true;

//Arrays
let numer0: number[] = [2002];
let nomesLivro: string [] = ['Narnia'];

//Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nomeLivro: string;
    anoPublicacao: number;
    autor: string;
}

//Utilizar elas ficam assim:
let Livro0: Usuario = {
    nome: 'Amanda',
    idade: 18
};