'use strict'

const btnTodos = document.getElementById('btn_todos_productos');
const btnSanos = document.getElementById('btn_mas_sanos');
const btnConsumidos = document.getElementById('btn_mas_consumidos');

btnTodos.onclick = () => { window.location.href = '../productos/lista.html?search=todos' }
btnSanos.onclick = () => { window.location.href = '../productos/lista.html?search=sanos' }
btnConsumidos.onclick = () => { window.location.href = '../productos/lista.html?search=consumidos' }