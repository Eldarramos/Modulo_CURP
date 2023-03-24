import React, { useState } from 'react';
import './Form.css';


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [curp, setCurp] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const guardarDatos = () => {
    if (nombre && telefono && correo && curp) {
      // Creamos un objeto con los datos del usuario
      const usuario = { nombre, telefono, correo, curp };
      // Guardamos los datos en Firebase
      //firebase.database().ref('usuarios/').push(usuario);
      // Reseteamos el formulario
      setNombre('');
      setTelefono('');
      setCorreo('');
      setCurp('');
      setMensajeError('');
    } else {
      setMensajeError('Por favor ingrese su nombre, teléfono y CURP.');
    }
  };

  const validarCurp = (curp) => {
    if (curp.length !== 18) {
      setMensajeError('La CURP debe contar 18 caracteres.');
      return false;
    } else if (!/^[A-ZÑ&]{4}\d{6}[HM]{1}[A-Z]{5}[A-Z\d]{2}$/.test(curp)) {
      setMensajeError('La CURP debe contar letras mayúsculas y números en el formato correcto.');
      return false;
    } else {
      setMensajeError('');
      return true;
    }
  };

  return (
    <div className='
    container'>
      <label className='label'>Nombre:</label>
      <input className='input' value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <label className='label'>Teléfono:</label>
      <input className='input' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <label className='label'>Correo:</label>
      <input className='input' value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <label className='label'>CURP:</label>
      <input
        className='input'
        value={curp}
        onChange={(e) => {
          setCurp(e.target.value.toUpperCase());
          validarCurp(e.target.value.toUpperCase());
        }}
      />
      {mensajeError ? <p className='error'>{mensajeError}</p> : null}
      <button className='button' onClick={guardarDatos}>Guardar</button>
    </div>
  );
};



export default Formulario;
