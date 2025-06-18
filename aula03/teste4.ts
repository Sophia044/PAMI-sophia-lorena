function saudacao(nome:string,saudacaoPadrao:string):string{
    if(saudacaoPadrao === undefined){
        saudacaoPadrao = "Ola"
    }
    return saudacaoPadrao + "," + nome + "!";
}
console.log(saudacao("João"));