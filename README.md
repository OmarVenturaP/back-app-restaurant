# Web Server - BackendAppRestaurant by OmarVentura.

## Tabla de Contenidos
1. [Requerimentos](#id1)
2. [Creación del proyecto](#id2)
3. [Dependencias usadas crear el proyecto](#id3)
4. [Estructura de directorio de App](#id4)
5. [Carpetas `app`](#id5)
6. [Diseño de todos los componentes de la app](#id8)
7. [Archivo app.js y funcionalidad](#id9)
8. [Como clonar Repo y correrlo de manera local](#id11)

## Requerimentos<a name="id1"></a>

1. Endpoints para Usuarios.
2. Endpoints para Productos.

## Creación del proyecto<a name="id2"></a>
```
npm init -y
```

## Dependencias usadas crear el proyecto<a name="id3"></a>

 - `Cors 2.8.5`:  Dependencia CORS utilizado para validar el correcto funcionamiento de los diferentes módulos en la aplicación, se inicia con el `npm install --save-dev cors` y se añade al `package.json` los scripts necesarios.
   * <a href="https://jestjs.io/es-ES/docs/next/getting-started" > Documentación `CORS`</a>
 - `Express 4.18.2`: Express lo utilizamos para crear la aplicación y poder correrla en el entorno NODE.JS con un servidor web para integrar nuestros módulos y que sean funcionales.
   * <a href="https://devdocs.io/express/starter/installing" > Documentación `Express`</a>
 - `mysql2 3.2.0`:  Para la base de datos ocupamos MySQL.
   * <a href="https://www.mysql.com/" > Documentación `MySQL`</a>
 - `sequelize 6.30.0`:  Para la conexión a la Base de Datos se utilizó SEQUELIZE y así poder conectarse a MySQL.
   * <a href="https://sequelize.org/docs/v6/getting-started/" > Documentación `SEQUELIZE`</a>

## Estructura de directorio de App<a name="id4"></a>

```mermaid
graph TD;
    BackendAppRestaurant-->app;
    app-->controllers;
    app-->models;
    app-->routes;
    controllers-->productControllers;
    controllers-->userControllers;
    models-->userModels;
    models-->productModels;
    routes-->routesProducts;
    routes-->routesUsers;    
```
Separamos los directorios para tener una estructura, separar las responsabilidades, los cuales estructuramos de la siguiente forma:

#### Carpetas `app`<a name="id5"></a>

- Carpeta `models`: Se crearon los archivos `productModels` y `userModels` en el cual se crea una constante para Productos y otra para Usuarios, importando la conexión a la Base de Datos, alli creamos tipos para SEQUELIZE para la BD.

- Carpeta `controllers`: Aquí tenemos los archivos `productControllers` y `userControllers` que importa la información recibida en los Models, de allí exporta los endpoints para su uso.

- Carpeta `database`: En esta carpeta tenemos un archivo de conexión a la Base de Datos con SEQUELIZE.

- Carpeta `routes`: En esta carpeta tenemos un archivo de rutas, en la cual se incluyen todas las rutas de accesos a las diferentes endpoints de la aplicación.

### Diseño de todos los componentes de la app<a name="id8"></a>

```mermaid
graph TD;
    database-.->db
    db-->Models
    db-->Controllers
    Models<-->Controllers
    Server<-->Routes
    Controllers-->Server-->API
```
### Archivo `app.js`<a name="id9"></a>
    - En el archivo se crea el servidor con Express, en el cual se crean los endpoints para los diferentes requerimientos.

#### Funcionalidad:

| Request | Link | Response |
|---|---|---|
| `https://back-app-restaurant-production.up.railway.app/user` | <a href="https://back-app-restaurant-production.up.railway.app/user" > `Usuarios`</a> | Se obtiene la lista de los Usuarios |
| `https://back-app-restaurant-production.up.railway.app/products` | <a href="https://back-app-restaurant-production.up.railway.app/products" > `Productos`</a> | Se obtiene la lista de los Productos |

## Como clonar Repo y correrlo de manera local<a name="id11"></a>
* Primero debes ubicarte en la página principal del repositorio <a href="https://github.com/OmarVenturaP/back-app-restaurant">BackAppRestaurant</a>.
* Al estar en la página principal del Repositorio debes ubicarte en Clone y copiar el link de acceso al repo:

![image](https://user-images.githubusercontent.com/99059639/231044295-44192c36-531b-4b61-92ea-decdd8531004.png)

* Posteriormente debes abrir la linea de comandos Git Bash e ingresar el comando y el link al repo
```
git clone https://github.com/OmarVenturaP/back-app-restaurant.git
```
* Una vez clonado el repo de manera local, debes instalar las dependencias necesarias dentro de este proyecto, para ello ejecuta:
```
npm install
```
* Posteriormente ejecuta el servidor para validar su correcto funcionamiento:
```
node app.js
```
<hr>
