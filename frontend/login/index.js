'use strict';

async function validarUsuarioClave () {
  const txtUsuario = document.getElementById('txt_usuario');
  const txtClave = document.getElementById('txt_clave');
  const usuario = txtUsuario.value;
  const clave = txtClave.value;
  try {
    const response = await fetch('http://161.35.61.229:3000/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://161.35.61.229:3000',
        'Access-Control-Allow-Origin': 'http://161.35.61.229:3000'
      },
      body: JSON.stringify({ data: { usuario, clave } })
    });
    const estado = response.status
    return estado === 200;
  } catch (error) {
    return false;
  }
}

async function ingresarApp () {
  const esValido = await validarUsuarioClave();
  if (esValido) {
    window.location.href = '../home/index.html'
  } else {
    alert('Usuario o clave incorrecta');
  }
}

const btnUsuario = document.getElementById('btn_iniciar_sesion');
btnUsuario.onclick = ingresarApp;