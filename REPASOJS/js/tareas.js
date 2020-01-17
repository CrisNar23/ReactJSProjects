///////////////// POO ////////////////////////
/*
//Escribir clases
class Tarea {
    constructor(nombre, prioridad){
      this.nombre = nombre;
      this.prioridad = prioridad;
    }
    mostrar(){
      return `${this.nombre} tiene una prioridad ${this.prioridad}`;
      
    }
  }
  
  class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
      super(nombre, prioridad);
      this.cantidad = cantidad;
    }
  }

  //Crear los objetos
  let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
  let tarea2 = new Tarea('Preparar café', 'Media');
  let tarea3 = new Tarea('Pasear al perro', 'Baja');
  
  console.log(tarea1.mostrar());
  console.log(tarea2.mostrar());
  console.log(tarea3.mostrar());
  
  let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
  console.log(compra1.mostrar());
*/

/*
//Export variables
export const nombreTarea = 'Pasear al perro';

//Exportar objetos
const nombreTarea1 = 'Pasear al perro';
const tarea = 'Tarea';

export default {
    nombre: nombreTarea1,
    tarea: tarea
}

//Exportar funciones
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () =>{
    console.log('La tarea se completó');   
}
*/
//Exporta clases
export default class Tarea {
    constructor(nombre, prioridad){
      this.nombre = nombre;
      this.prioridad = prioridad;
    }
    mostrar(){
      console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);      
    }
}