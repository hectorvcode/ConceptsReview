const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

/* Comunmente accedemos asi:
const nombre = persona.nombre;
const apellido = persona.apellido;
const edad = persona.edad; 
*/

// Aplicando destructuring
const { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);

const {
  firstName: nombreJuan,
  apellido: apellidoJuan,
  age: edadJuan,
} = persona;
console.log(nombreJuan, apellidoJuan, edadJuan);
