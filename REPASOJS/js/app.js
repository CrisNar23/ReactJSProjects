/*Crear variables
//Varaibles con var
var aprendiendoJS; //Se puede inicializar y asignar valor despues
aprendiendoJS = true;
aprendiendoJS = false;
aprendiendoJS = 20;
aprendiendoJS = 'Juan'; Puede ser con "Juan"
console.log(aprendiendoJS);

//Variable con const
const aprendiendoJS = 'JavaScript'; //Siempre debe tener valor de inicio y nunca cambia su valor

//Variables con let
let aprendiendoJS; //Similar a var se pude inicializar y asignar valor luego y cambiar en cualquier momento
aprendiendoJS = 'JavaScript';
aprendiendoJS = true;
console.log(aprendiendoJS);*/

/*//Scope con var
var musica = 'Rock';

if (musica) {
    var musica = 'Grunge';
    console.log('dentro del if: ', musica);
}
console.log('Fuera del if: ', musica);
//La variable se reescribe y al final se muestra 2 Grunge
*/

/* //Scope con let
let musica = 'Rock';

if (musica) {
    let musica = 'Grunge';
    console.log('dentro del if: ', musica);
}
console.log('Fuera del if: ', musica);
//La variable no se reescribe y al final se muestra Grunge dentro del if y Rock fuera del if */

/* //Scope con const
const musica = 'Rock';
//const musica = 'Grunge';//Si le pongo el const aquí muestra error porque musica ya fue declarada
if (musica) {
    const musica = 'Grunge'; //Si le pongo const aqui si diferencia que es una nueva
    console.log('dentro del if: ', musica);
}
console.log('Fuera del if: ', musica); */

/* //TEMPLATE STRINGS
const nombre = "Juan";
const trabajo = "Desarrollador Web";

//Forma tradicional de concatenación JavaScript
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);

//Forma actual
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar en múltiples lineas antes
const contenedorApp = document.querySelector("#app");
let html =
  "<ul>" +
  "<li> Nombre; " +
  nombre +
  "</li>" +
  "<li> Trabajo: " +
  trabajo +
  "</li>" +
  "</ul>";
contenedorApp.innerHTML = html; 

//Concatenar en múltiples lineas ahora
const contenedorApp = document.querySelector("#app");
let html = `<ul> 
                <li> Nombre;   ${nombre}  </li> 
                <li> Trabajo:  ${trabajo}  </li> 
            </ul>`;
contenedorApp.innerHTML = html;*/


//FUNCIONES
/* //crear una funcion (Function Declaration)
function saludar(nombre) {
  console.log('Bienvenido ' + nombre);
}
saludar('Juan');
//No hay problema si llamo la función antes o despues de la declaración

//Function expression
const cliente = function (nombreCliente) {
  console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Juan');
//Siempre se debe declarar la función antes de llamarla 

//parametros por default en laa funciones
function actividad(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
  console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad('Juan', 'Aprender JavaScript');//Si se llama la función así sale con estos parametros y sobrescribe los parametros por defecto
actividad();//Si se llama así salen los parametros por defecto definidos en la función

//También se puede hacer en function expresiion
const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Quimica') {
  console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad('Juan', 'Aprender JavaScript');//Si se llama la función así sale con estos parametros y sobrescribe los parametros por defecto
actividad();//Si se llama así salen los parametros por defecto definidos en la función

//Arrow functions
//Forma tradicional de hacer funciones
let viajando = function (destino) {
  return `Viajando a la ciudad de ${destino}`;
}
let viaje = viajando('Paris');
console.log(viaje);

//Arrow function cambia la palabra funcion por => despues del parametro
//Es posible también quitar los parentesis del parametro si solo es uno destino => 
let viajando = (destino , duracion) => {
  return `Viajando a la ciudad de ${destino} por ${duracion}`;
}
//Si una funcion retorna un valor se puede eliminar las llaves tambien
//let viajando = destino => `Viajando a la ciudad de: ${destino}`;
let viaje = viajando('Paris', '9 Dias');
console.log(viaje);

//OBJETOS EN JAVASCRIPT
//Object literal
const persona = {
  nombre: 'Juan',
  profesion: 'Desarrollador web',
  edad: 23
}
console.log(persona);
console.log(persona.nombre);
console.log(persona['nombre']);//Otra forma de mostrar la propiedad
console.log(persona.profesion);
console.log(persona.edad);

//Object constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
//crear nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Aprender Java', 'Urgente');
const tarea3 = new Tarea('Aprender Phyton', 'Urgente');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

//Prototypes
//Sirve para crear metodos de un tipo de objeto determinado
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
*/


