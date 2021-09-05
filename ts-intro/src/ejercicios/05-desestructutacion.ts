
//Desestructuración de Objetos
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen: 5,
    segundo: 36,
    cancion: "What does de fov say",
    detalles: {
        autor: "Fox",
        anio: 2010
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

console.log(`El volumen es de ${volumen}`);
console.log(`El segundo es de ${segundo}`);
console.log(`La cancion es ${cancion}`);
console.log(`El autor es ${autor}`);
console.log(`El año es ${anio}`);


//Desestructuración de arreglos
const phones:string[] = ["Iphone", "Samsung", "Nokia"];
const [p1,p2,p3] = phones;

console.log(`Celular 1: ${p1}`);
console.log(`Celular 1: ${p2}`);
console.log(`Celular 1: ${p3}`);
