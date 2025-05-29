//Function que retorna tipos
function saudacao (nome: string): string{
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario{
    nome: string;
    idade: number;
    email?: string //opcional
}

//Utiliozando a interface usuario fica assim:
function exebirUsuario (usuario: Usuario): void{
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Nome: ${usuario.idade}`);
}