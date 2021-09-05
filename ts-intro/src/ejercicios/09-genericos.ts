//Genericos

function queTipoSoy<T>(argumento){
    return argumento;
} 

let soyString = queTipoSoy("Hola soy argumento string");
let soyNumero = queTipoSoy(20);

//tb puedo mandarle cual va a ser
let soyExplicito = queTipoSoy<number>(1);