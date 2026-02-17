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
