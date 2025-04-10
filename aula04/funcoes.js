function ExibirMsg (msg) {
    console.log(msg)
}

ExibirMsg("Honey Badger")
ExibirMsg ("É uma cripto moeda")

//função basica
function Soma (n1, n2) {
    return n1 + n2

}

console.log (Soma(50,2))

//Arow Function ou função anonima

const Potencia = (n, p) => {

    return Math.pow(n, p)
}
console.log(Potencia (4, 2))

//media >= 6,00 = Aprovado
//media < 6, 00 || >= 4,00 = recuperação
//media < 4,00 = reprovado

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2

    if (NotaFinal < 4.00){
        return "Reprovado"
    }
    if (NotaFinal >= 6.00){
        return "Aprovado"
    }

    return "Recuperação"

}

console.log (Media (8, 10))
