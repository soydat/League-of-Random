WIP

League of Random

Descripción del Proyecto

League of Random es una aplicación de escritorio desarrollada para generar combinaciones aleatorias de campeones, ítems y hechizos de invocador para League of Legends. Esta herramienta permite a los jugadores experimentar nuevas configuraciones y desafíos al azar, promoviendo la creatividad y la diversión en el juego.

Funcionalidades Principales

Generación de Campeón Aleatorio: 

Devuelve un campeón seleccionado aleatoriamente con su nombre, título, y descripción.
Generación de Ítems Aleatorios: Asigna aleatoriamente seis ítems para el campeón generado.
Generación de Hechizos de Invocador Aleatorios: Selecciona dos hechizos de invocador al azar.

Filtros Personalizados:

Solo Campeón: Genera únicamente un campeón aleatorio.
Solo Ítems: Genera solo una configuración de ítems sin campeones ni hechizos.
Campeón e Ítems: Genera un campeón junto con ítems, sin hechizos.

Tecnologías Utilizadas

Electron:

Para desarrollar la aplicación de escritorio.
JavaScript (Node.js): Manejo de la lógica del backend y manipulación del DOM.
HTML y CSS: Estructura y estilo de la interfaz de usuario.
League of Legends API (Data Dragon): Proporciona imágenes y datos de campeones, ítems y hechizos.

Pasos para Desarrollar la Aplicación

Configuración Inicial:

Creación del entorno de desarrollo utilizando Electron.
Configuración básica del proyecto con HTML, CSS y JavaScript.

Implementación de Funcionalidades:

Generación de Campeones: Utilización de la función ranChampionNameGen() para obtener detalles de un campeón aleatorio.

Generación de Ítems y Hechizos: Uso de módulos personalizados (items.js y summoners.js) para generar ítems y hechizos de invocador al azar.

Integración de Filtros:

Implementación de filtros para permitir a los usuarios seleccionar qué elementos desean generar.

Interfaz de Usuario:

Diseño de una interfaz intuitiva con opciones claras para la generación de configuraciones aleatorias.

Manejo de la interacción del usuario con eventos de clic y actualizaciones dinámicas del DOM.

Cómo Usar la Aplicación
Descarga e Instalación:

Clona este repositorio en tu máquina local.
Ejecuta npm install para instalar las dependencias.
Inicia la aplicación con npm start.
Uso:

Selecciona los filtros deseados.
Haz clic en el botón de generación para ver los resultados aleatorios.
Créditos
Este proyecto fue desarrollado por Franco Nahuel Almeida. Todos los derechos reservados.
