interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => {};
}

const spiderman:SuperHeroe = {
    nombre: 'Spiderman',
    edad: 20,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion: ():string => {
        return `${spiderman.nombre}, ${spiderman.direccion.ciudad}, ${spiderman.direccion.pais}`;
    }
}

const direccion = spiderman.mostrarDireccion();
console.log(direccion);