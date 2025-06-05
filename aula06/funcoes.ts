//Função que retorna tipos
function saudação (nome: string): string {
return `Olá, ${nome}!`;
}

console.log(saudação('Leandro'));

//Interface para objetos Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opicional
}

//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario: Usuario): void{
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22});

//Exemplo de uma função que retorna arrays e tem parametros opicionais
function listarNomes(nome: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes (['Ana', 'Bruno', 'Carlos']);

