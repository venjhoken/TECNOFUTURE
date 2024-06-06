Proyecto de Registro y Visualización de Productos

Este proyecto permite registrar productos mediante un formulario y visualizarlos en una página de listado. Los datos de los productos se almacenan en el localStorage del navegador. El proyecto incluye validación de formularios y una interfaz para buscar y filtrar productos.

Vistas del sistema.


Las vistas solicitadas en el sistema son:
● Registro de un nuevo producto, Registro.
Vista de registro de productos (Registro)
○ Título de la página.
○ Formulario de registro.
■ Campo para el nombre.
■ Selector de categoría.
■ Selector de imagen.
■ Campo para el código de producto.
■ Campo para el precio.
■ Campo para el color.
■ Campo para la marca.
■ Campor para el modelo.
○ Botón de registro.


● Pantalla de Indicaciones.
○ Título de la página.
○ Indicaciones de como crear un producto.
○ Botón de redirección a Registro de productos.

● Vista de productos, con paginación de 15 elementos.
○ Titulo de la página.
○ Sección de productos, se deben visualizar todas sus propiedades.
○ Paginación de los productos, 15 productos por página.
○ La paginación indica en cuál página se encuentra y tener mínimo dos
botones, el de siguiente página y el de página anterior.
○ Barra de navegación
■ Botón para búsqueda de productos.
■ Botón para redirección a registro de productos.


● Lista de resultados.
○ Tabla con  los resultados.
○ indica imagen de los productos encontrados.
○ Visualizar al menos 6 propiedades de los elementos encontrados.
○ Botón de regresar a la vista de productos.


Descripción de Archivos

productos.html
Contiene la pagina de Inicio del programa.

registro.html
Página que contiene el formulario para registrar nuevos productos.

indicaciones.html
Contiene las indicaciones para llenar el formulario correctamente.

productos.js
Script que maneja el registro de productos. Valida el formulario, convierte la imagen a base64 y guarda los datos en localStorage.

vistaProductos.html
Página que muestra la lista de productos registrados.

registro.js
Script que maneja la visualización de vistaProductos, incluyendo la paginación.

tablaDatos.html
Contiene la tabla de los proctos con sus respectivos tipos de buscador de producto.

tablaDatos.js
Script que maneja el registro de los datos a la tabla.

Carpeta/imagen2
Contiene las imagenes del array de los 50 productos.

Carpeta/CSS
Contiene los estilos de los archivos Html.
