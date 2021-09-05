//Desestructuracion de argumentos en una funcion

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Iphone",
    precio: 15
}

const tableta: Producto = {
    desc: "Nokia Tablet",
    precio: 35
}

export function CalcularIva(productos: Producto[]):[number, number]{
    
    let precio_total = 0;
    
    productos.forEach(({precio}) =>{
        precio_total += precio;
    })
    let iva_precio_total = precio_total * 0.13;
    
    return [precio_total, iva_precio_total]; 
}

let articulos = [telefono, tableta];
const [precio_total, iva] = CalcularIva(articulos);

// console.log(`Precio total: ${precio_total}`);
// console.log(`IVA: ${iva}`);
