'use strict'

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('search');
alert(myParam);

function obtenerUrl (searchParam) {
  let url;
  switch (searchParam) {
    case 'sanos': {
      url = 'http://161.35.61.229:3000/producto/lista/top-bueno'
    } break;
    case 'consumidos': {
      url = 'http://161.35.61.229:3000/producto/lista/top-bueno'
    } break;
    default: {
      url = 'http://161.35.61.229:3000/producto/lista'
    }
  }
  return url;
}

async function consultarProductos (url) {
  try {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://161.35.61.229:3000',
        'Access-Control-Allow-Origin': 'http://161.35.61.229:3000'
      }
    });
    return { ok: true, data: (await response.json()) };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function construirListaProductos (data) {
  let html = '';
  for (const d of data) {
    html += `<div class="card" style="width: 18rem;"><img src="../assets/images/${d.asset}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${d.nombre}</h5><a href="#" class="btn btn-primary">Ver detalle</a></div></div>`
  }
  return html;
}

async function cargarLista () {
  const url = obtenerUrl(myParam);
  const respuesta = await consultarProductos(url);
  if (!respuesta.ok) {
    return alert(respuesta.error);
  }
  const html = construirListaProductos(respuesta.data);
  const container = document.getElementById('container_cartas');
  container.innerHTML = html;
}

cargarLista().then().catch()