const PRODUCTS = [
  { id: 1, nombre: 'manzana', imagen: 'manzana.png', cantidad: 1, caloriasTotales: 10, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 2, nombre: 'leche', imagen: 'leche.jpg', cantidad: 1, caloriasTotales: 60, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 3, nombre: 'huevo', imagen: 'huevo.jpg', cantidad: 1, caloriasTotales: 30, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 4, nombre: 'carne de res', imagen: 'carne-res.jpg', cantidad: 1, caloriasTotales: 50, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 5, nombre: 'mantequilla', imagen: 'mantequilla.jpg', cantidad: 1, caloriasTotales: 130, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 6, nombre: 'queso gd', imagen: 'queso-gd.jpg', cantidad: 1, caloriasTotales: 100, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 7, nombre: 'yogurt', imagen: 'yogurt.jpg', cantidad: 1, caloriasTotales: 150, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 8, nombre: 'cereal zucaritas', imagen: 'cereal.jpg', cantidad: 1, caloriasTotales: 200, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 9, nombre: 'cebolla', imagen: 'cebolla.jpg', cantidad: 1, caloriasTotales: 50, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 10, nombre: 'atun md.', imagen: 'atun-md.jpg', cantidad: 1, caloriasTotales: 80, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 11, nombre: 'arroz', imagen: 'arroz.jpg', cantidad: 1, caloriasTotales: 70, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 12, nombre: 'galletas oreo peq.', imagen: 'oreo.jpg', cantidad: 1, caloriasTotales: 120, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 13, nombre: 'aceite vegetal', imagen: 'aceite.png', cantidad: 1, caloriasTotales: 200, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 14, nombre: 'chocolate ferrero pq', imagen: 'ferrero.jpg', cantidad: 1, caloriasTotales: 170, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 15, nombre: 'nutella gd', imagen: 'nutella.jpg', cantidad: 1, caloriasTotales: 550, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 16, nombre: 'tilapia premium', imagen: 'tilapia.jpg', cantidad: 1, caloriasTotales: 90, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 17, nombre: 'helado napolitano', imagen: 'napolitano.png', cantidad: 1, caloriasTotales: 190, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 18, nombre: 'botella cola pepsi', imagen: 'pepsi.jpg', cantidad: 1, caloriasTotales: 180, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 19, nombre: 'jamon cerdo gd', imagen: 'jamon-cerdo.png', cantidad: 1, caloriasTotales: 150, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 20, nombre: 'carne molida gd', imagen: 'carne-molida.jpg', cantidad: 1, caloriasTotales: 300, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 21, nombre: 'jugo naranja gd', imagen: 'jugo-naranja.jpg', cantidad: 1, caloriasTotales: 400, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 22, nombre: 'banano', imagen: 'banano.jpg', cantidad: 1, caloriasTotales: 60, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 23, nombre: 'verde', imagen: 'verde.jpg', cantidad: 1, caloriasTotales: 50, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 24, nombre: 'galletas chips ahoy', imagen: 'chips-ahoy.jpg', cantidad: 1, caloriasTotales: 100, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 25, nombre: 'chuletas ahumadas', imagen: 'chuleta.jpg', cantidad: 1, caloriasTotales: 350, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 26, nombre: 'queso cheddar pq', imagen: 'queso-cheddar.jpg', cantidad: 1, caloriasTotales: 125, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 27, nombre: 'jugo manzana pq', imagen: 'jugo-manzana.jpg', cantidad: 1, caloriasTotales: 500, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 29, nombre: 'salsa de tomate', imagen: 'salsa-tomate.jpg', cantidad: 1, caloriasTotales: 380, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } },
  { id: 30, nombre: 'mayonesa', imagen: 'mayonesa.jpg', cantidad: 1, caloriasTotales: 400, detalle: { organico: true, peso: 200, porciones: 1, caloriasPorcion: 50 } }
];

module.exports = {
  PRODUCTS
};
