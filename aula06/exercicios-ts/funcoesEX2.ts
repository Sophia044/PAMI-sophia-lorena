
    //Interface para cidades
    interface Cidades {
        batata: string;
    }
    
    //Exemplo de uma função que retorna arrays 
    function listarBatata(batata: string[]): void {
        batata.forEach(batata => console.log(batata));
    }
    
    listarBatata (['Lisboa', 'Porto', 'Coimbra', 'Braga', 'Évora']);