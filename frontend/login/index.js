'use strict';

async function iniciarSesion () {
  const txtUsuario = document.getElementById('txt_usuario');
  const txtClave = document.getElementById('txt_clave');
  const usuario = txtUsuario.innerText;
  const clave = txtClave.innerText;
  const response = await fetch('http://161.35.61.229:3000/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://161.35.61.229:3000',
      'Access-Control-Allow-Origin': 'http://161.35.61.229:3000'
    },
    body: { usuario, clave }
  });
  const estado = response.status
  alert(estado)
  return estado === 200
}

const btnUsuario = document.getElementById('btn_iniciar_sesion');
btnUsuario.onclick = iniciarSesion;