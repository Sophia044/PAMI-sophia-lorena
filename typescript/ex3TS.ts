function saudacao(nome: string, saudacaoPadrao: string = "Olá"): string {
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao("Maria")); // "Olá, Maria!"