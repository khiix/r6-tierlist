# R6 Operator Tier List

## Descripción

Este proyecto es una **aplicación web interactiva** que permite gestionar una **tier list** de los operadores del juego *Rainbow Six Siege*. Los usuarios pueden arrastrar y soltar operadores entre diferentes niveles (S, A, B, C, D), permitiendo organizar a los operadores de acuerdo con su rendimiento o preferencia.

### Características principales:
- **Drag & Drop**: Usa la API de **HTML5 Drag & Drop** para permitir la interacción del usuario con los operadores.
- **Frontend**: Hecho con **HTML, CSS y JavaScript**.
- **Backend**: Usando **Node.js** y **Express** para gestionar la tier list y persistir los datos en un archivo **JSON**.
- **Docker**: Utiliza **Docker Compose** para gestionar y conectar los contenedores del frontend y backend.

---

## Tecnologías utilizadas

- **Frontend**:
  - **HTML** para la estructura.
  - **CSS** para el diseño visual.
  - **JavaScript** para la interacción (Drag & Drop y comunicación con el backend).

- **Backend**:
  - **Node.js** y **Express** para manejar las rutas y la API REST.
  - **fs (File System)** de Node.js para leer y escribir el archivo JSON que almacena el estado de la tier list.

- **Docker**:
  - **Docker Compose** para definir y ejecutar múltiples contenedores.
  - **Nginx** para servir el frontend dentro de un contenedor.

---

## Instrucciones de ejecución

1. **Clonar el repositorio**:

   Si aún no has clonado el proyecto, clónalo usando el siguiente comando:

   ```bash
   git clone https://github.com/khiix/r6-tierlist.git
   cd r6-tierlist
   ```

2. **Construir y levantar los contenedores**:

   Asegurate de tener Docker instalado. Luego, desde la carpeta raiz del proyecto, ejecuta:

   ```bash
   docker compose up --build
   ```

   Esto construira las imagenes de Docker para el frontend y el backend, y levantara los contenedores.

3. **Acceder a la aplicacion**:

   Una vez que Docker haya terminado de construir y levantar los contenedores, abre tu navegador y accede a las siguientes direcciones:

   - Frontend (la aplicacion con la tier list interactiva): `http://localhost:8080`
   - Backend (API que devuelve el archivo `tiers.json`): `http://localhost:3000/tiers`

4. **Detener los contenedores**:

   Cuando termines de usar la aplicacion, puedes detener los contenedores con el siguiente comando:

   ```bash
   docker compose down
   ```

---

## Estructura del proyecto

```text
r6-tierlist/
├── backend/
│   ├── data/
│   │   └── tiers.json
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   └── html/
│       ├── index.html
│       ├── style.css
│       ├── app.js
│       └── images/
│           ├── ash.png
│           ├── jager.png
│           └── ...
├── docker-compose.yml
```

---

## Contribuir

Si deseas mejorar o contribuir al proyecto, sientete libre de crear un pull request con tus cambios.

---

## Autor

Este proyecto fue desarrollado por Christian Darien Montes de Oca Perez.
