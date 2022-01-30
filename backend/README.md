# Organización
Dentro de esta carpeta están los servicios que la aplicación móvil consume

# Pre-requisitos para ejecutar el servicio
- NodeJS

# Ejecución
Dentro de la carpeta raíz (backend), ejecuta:
- `npm i`
- `npm start`

Esto levantará el servicio, puedes comprobar que el servicio está corriendo si abres la url: `http://127.0.0.1:3000/check`

# Endpoints
## Inicio de sesión
```
POST http://127.0.0.1:3000/login
{"usuario": "user", "clave":"pass"}
```

## Obtener todos los productos
```
GET http://127.0.0.1:3000/producto/lista
```
Respuesta:
```
[{id: number, nombre: string},{id:number, nombre: string}...]
```

## Obtener un producto basado en el ID
```
GET http://127.0.0.1:3000/producto/detalle/:id
```
Respuesta:
```
{ id: number, nombre: string, cantidad: number, caloriasTotales: number, detalle: { organico: boolean, peso: number, porciones: number, caloriasPorcion: number } }
```

# Datos iniciales
## Usuarios
- darwin
- victor
- bryan

Clave para todos: 1234