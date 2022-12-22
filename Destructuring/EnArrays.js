// Ejemplo de inicio

const listaNumeros = [12, 21, 38];

const posicion1 = listaNumeros[0];
const posicion2 = listaNumeros[1];
const posicion3 = listaNumeros[2];

console.log(posicion1, posicion2, posicion3);

// Aplicando destructuring

const [p1, p2, p3] = listaNumeros;
console.log(listaNumeros);

// si saltamos la primera posicion1

const [, e2, e3] = listaNumeros;
console.log(e2, e3);

// Caso especial: tres primeras posiciones y el resto en un array

const listNum = [12, 21, 38, 45, 67, 87];
const [pos1, pos2, pos3, ...restoElementos] = listNum;
console.log(pos1, pos2, pos3, restoElementos);
