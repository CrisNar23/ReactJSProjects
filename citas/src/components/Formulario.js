import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

  //State para citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  //State para validaciones
  const [error, actulizarError] = useState(false)

  //Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //Extraer los valores de cita
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = e => {
    e.preventDefault();

    //Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
      hora.trim() === '' || sintomas.trim() === '') {
      actulizarError(true);
      return;
    }

    //Eliminar el mensaje de validacion
    actulizarError(false);

    //Asignar un ID
    cita.id = uuid();
    console.log(cita);

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })

  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
        : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        />
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;