//1. Por que TypeScript?
//JavaScript (Sem tipagem):
   function somar(a, b) {
  return a + b;
}
console.log(somar(5, "10")); // Resultado inesperado: "510"

//Em JavaScript, você pode passar qualquer tipo de dado para uma função, o que pode levar a erros inesperados.
//TypeScript (Com tipagem):
   function somar(a: number, b: number): number {
  return a + b;
}
console.log(somar(5, 10)); // Correto: 15
// console.log(somar(5, "10")); // Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.

//TypeScript exige que você defina os tipos de dados dos parâmetros e do retorno, evitando erros de tipo.
//2. Tipagem de parâmetros e retornos:
//Parâmetros opcionais:
//JavaScript:
     function saudacao(nome, saudacaoPadrao) {
  if (saudacaoPadrao === undefined) {
    saudacaoPadrao = "Olá";
  }
  return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("João")); // "Olá, João!"

//TypeScript:
     function saudacao(nome: string, saudacaoPadrao?: string): string {
  if (saudacaoPadrao === undefined) {
    saudacaoPadrao = "Olá";
  }
  return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("João")); // "Olá, João!"

//O ? indica que o parâmetro é opcional.
//Parâmetros padrão:
//JavaScript:
     function saudacao(nome, saudacaoPadrao = "Olá") {
  return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("Maria")); // "Olá, Maria!"

//TypeScript:
     function saudacao(nome: string, saudacaoPadrao: string = "Olá"): string {
  return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("Maria")); // "Olá, Maria!"

//Valores padrão são definidos diretamente na declaração da função.
//Parâmetros rest:
//JavaScript:
     function somarTudo(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // 10

//TypeScript:
     function somarTudo(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // 10

//O ... coleta múltiplos argumentos em um array tipado.
//Retorno void:
//TypeScript:
     function exibirMensagem(mensagem: string): void {
  console.log(mensagem);
}
exibirMensagem("TypeScript é poderoso!");

//void indica que a função não retorna valor.
//3. Funções de seta (Arrow functions):
//JavaScript:
   const number = (numero) => numero * numero;
console.log(quadrado(5)); // 25

//TypeScript:
   const batata = (numero: number): number => numero * numero;
console.log(quadrado(5)); // 25

//A tipagem torna as funções de seta mais seguras e claras.
//4. Inferência de tipo:
//TypeScript:
   function multiplicar(a: number, b: number) {
  return a * b; // TypeScript infere que o retorno é 'number'
}
console.log(multiplicar(3, 4)); // 12

//TypeScript pode inferir o tipo de retorno em alguns casos, reduzindo a necessidade de tipagem explícita.
//5. Sobrecarga de funções:
//TypeScript:
   function somar(a: number, b: number): number;
function somar(a: string, b: string): string;
function somar(a: any, b: any): any {
  return a + b;
}
console.log(somar(5, 10)); // 15
console.log(somar("Olá, ", "TypeScript!")); // "Olá, TypeScript!"

//Permite definir múltiplas assinaturas de função para diferentes tipos de argumentos.
//6. Funções genéricas:
//TypeScript:
   function inverterArray<T>(array: T[]): T[] {
  return array.reverse();
}
console.log(inverterArray([1, 2, 3])); // [3, 2, 1]
console.log(inverterArray(["a", "b", "c"])); // ["c", "b", "a"]

//A função genérica pode ser usada com arrays de diferentes tipos, sem perder a tipagem.
