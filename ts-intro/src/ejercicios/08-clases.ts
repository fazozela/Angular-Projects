//Clases basicas

class Persona{
    public id: number;
    public nombre: string;

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }

    imprimirNombre():string{
        return `Hola soy ${this.nombre} y tengo ${this.id} como CI.`;
    }
}

let fazozela = new Persona(1, "Felix");

console.table(fazozela);


//Extender una clase
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
        ) {}
}

class Heroe extends PersonaNormal{
    constructor(public poder:string, public nombreReal:string){
        super("Tony", 'NY');
    }
}

let ironman = new Heroe("Dinero", "Ironman");
console.table(ironman);