# Aplicación de Lista de Tareas (To-Do)

![image](https://github.com/MGuerra17/AdventaToDo/assets/80714832/63c9bb52-4b6a-479e-84f2-d5a57bac22d0)

Esta es una aplicación móvil desarrollada en React Native para la gestión de tareas (To-Do). La aplicación está conectada a un servidor en línea para la persistencia de datos. El servidor aloja una API REST que puedes encontrar en [https://todo-server-y00c.onrender.com/todos](https://todo-server-y00c.onrender.com/todos).

## Nota Importante

La primera solicitud a la API puede tardar más tiempo de lo habitual debido a que el servidor puede estar pausado y necesita reiniciarse. Después de la primera solicitud, el servidor estará en funcionamiento y las respuestas serán más rápidas.

## Empezando

Sigue estos pasos para ejecutar el proyecto localmente:

### Requisitos previos

Asegúrate de tener instalado lo siguiente en tu máquina de desarrollo:

- Node.js
- npm (Node Package Manager)
- React Native CLI

### Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/MGuerra17/AdventaToDo.git
   ```

2. Navega hasta el directorio del proyecto:

   ```bash
   cd AdventaToDo
   ```

3. Instala las dependencias usando npm:

   ```bash
   npm install
   ```

### Ejecutar la Aplicación

1. Asegúrate de que el servidor esté en funcionamiento en [https://todo-server-y00c.onrender.com/todos](https://todo-server-y00c.onrender.com/todos).

2. Inicia el servidor de desarrollo de React Native:

   ```bash
   npm start
   ```

3. Ejecuta la aplicación en tu plataforma preferida (Android o iOS):

   Para Android:

   ```bash
   npm run android
   ```

   Para iOS:

   ```bash
   // Si es necesario
   cd ios && pod install
   
   npm run ios
   ```

4. La aplicación debería estar funcionando en tu simulador o dispositivo.

## Uso

- Al abrir la aplicación, verás una lista de tareas obtenidas desde el servidor.
- Puedes añadir nuevas tareas pulsando el botón "+" en la parte inferior derecha de la pantalla.
- Presiona en el boton eliminar en la parte derecha de una tarea para eliminarla.
- Toca en el checkbox de una tarea para marcarla como completada.
