'use strict'
const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get('id');

async function consultarDetalleProducto (id) {
  try {
    const response = await fetch('http://161.35.61.229:3000/producto/detalle/' + id, {
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

function construirDetalleProducto (d) {
  let html = '<tbody>';
  const img = document.getElementById('img_producto');
  img.src = '../assets/images/' + d.data.imagen;
  html += '<tr><td>Nombre</td><td>' + d.data.nombre + '</td></tr>';
  html += '<tr><td>Calorías totales</td><td>' + d.data.caloriasTotales + '</td></tr>';
  html += '<tr><td>Peso</td><td>' + d.data.detalle.peso + '</td></tr>';
  html += '</tbody>';
  console.log(JSON.stringify(d));
  return html;
}

async function cargarDetalle () {
  const respuesta = await consultarDetalleProducto(searchParam);
  if (!respuesta.ok) {
    return alert(respuesta.error);
  }
  const html = construirDetalleProducto(respuesta);
  const tbl = document.getElementById('tbl_detalle');
  tbl.innerHTML = html;
}

const btnBack = document.getElementById('btn_back');
btnBack.onclick = () => { window.location.href = '../home/index.html' }

cargarDetalle().then().catch()