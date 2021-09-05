//Funcion normal
function sumar(a: number, b: number):number{
    return a+b;
}

const resultadoSuma = sumar(5,8);

//Funcion de flecha
const resta = (a:number, b:number):number =>{
    return a - b;
}

const resultadoResta = resta(9, 5);

//Otra forma de mandar parametros
//(Obligatorios, opcionales, default)
const multiplicar = (a:number, b?:number, c:number = 4):number =>{
    return a*b*c;
}

const resultadoMult = multiplicar(5, 5, 3);


console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMult);


//mas ejemplos
interface Humano{
    nombre: string;
    vida: number;
    hablar: () => string;

}

const fazo: Humano = {
    nombre: "Pepe",
    vida: 27,
    hablar:()=>{
        return "Hola!!"
    }
}

const SerHumano = (humano:Humano, aumentarAnios:number):number => humano.vida += aumentarAnios;

let CurarFazo = SerHumano(fazo, 5)
console.log(CurarFazo);
console.log(fazo.hablar());
