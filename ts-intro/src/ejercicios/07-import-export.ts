import { CalcularIva, Producto } from './06-desectructuracion-funciones';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 15
    },
    {
        desc: 'Telefono 2',
        precio: 55
    }
];

const [precio_total, iva] = CalcularIva(carritoCompras);
console.log(`Precio total: ${precio_total}`);
console.log(`IVA: ${iva}`);


