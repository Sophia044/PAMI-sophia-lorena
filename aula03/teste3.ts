function saudacao(nome,saudacaoPadrao){
    if(saudacaoPadrao === undefined){
        saudacaoPadrao = "Ola"
    }
    return saudacaoPadrao + "," + nome + "!";
}
console.log(saudacao("João"));