let habilidades: (boolean | string | number)[] = ["Superfuerza", "Invisibilidad", "Saltomaximo", true, 911];
let nombres: string[] = ["Ale", "Mari"];

interface Personaje{
    nombre: string,
    profesion:  string,
    age: number,
    habilidades: string[],
    puebloNatal?: string
 }

const personaje:Personaje = {
    nombre: "Felix",
    profesion:  "Dev",
    age: 27,
    habilidades: ['Dibujo', 'Fotografia']
}

console.table(personaje)