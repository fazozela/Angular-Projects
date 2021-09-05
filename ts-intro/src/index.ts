interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const Pasajero1: Pasajero = {
    nombre: 'Felix'
}

const Pasajero2: Pasajero = {
    nombre: 'Nico',
    hijos: ['Alejandro', 'Norma']
}

function ContarHijos(pasajero: Pasajero){
    let numero_hijos = pasajero.hijos?.length || 0;
    
    console.log(`El pasajero ${pasajero.nombre} tiene ${numero_hijos} hijos`);
}

ContarHijos(Pasajero1);
ContarHijos(Pasajero2);