function somartudo(numeros:number[]):number{
    return numeros.reduce((total,num)=> total + num, 0)
}
console.log(somartudo(1,2,3,4))