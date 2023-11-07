# practica_nodejs: API Rest en 3 capas con Prisma y MySQL

Bienvenido al repositorio de `practica_nodejs`, una API Rest diseñada con las mejores prácticas de desarrollo en mente, utilizando una arquitectura de tres capas que facilita la mantenimiento y escalabilidad. Esta API es un campo de pruebas perfecto para aplicar y entender los principios de diseño y patrones arquitectónicos en un entorno de Node.js.

## Características 🌟

- **Arquitectura de Tres Capas**: Organización clara del código con una separación definida de responsabilidades: presentación, aplicación y datos.
- **Prisma ORM**: Interacción moderna y tipo-segura con la base de datos MySQL, aprovechando el poder de Prisma para facilitar las operaciones del CRUD y más.
- **Flexibilidad**: Diseñada para ser fácilmente extendida o modificada para adaptarse a diferentes casos de uso o para implementar nuevas funcionalidades.
- **Validación Robusta**: Implementa validaciones para asegurar que los datos recibidos cumplen con los requerimientos antes de procesarlos en la base de datos.

## Comenzando 🚀

Para poner en marcha `practica_nodejs`, sigue estos pasos:

### Prerrequisitos

- Node.js (v12 o superior recomendado)
- MySQL (v5.7 o superior recomendado)
- npm (o tu gestor de paquetes favorito)

### Instalación

1. Clona el repositorio en tu máquina local:

git clone https://github.com/tu-usuario/practica_nodejs.git
cd practica_nodejs

2. Instala las dependencias del proyecto:

npm install

3. Configura las variables de entorno creando un archivo .env basado en .env.example y ajusta las configuraciones para tu entorno local.
4. Ejecuta las migraciones de la base de datos:

npx prisma migrate dev

5. Inicia el servidor de desarrollo:

npm run dev

### Uso

Una vez que el servidor está en ejecución, puedes empezar a realizar peticiones a los siguientes endpoints:

GET /api/companies: Obtiene un listado de todas las empresas.
POST /api/companies: Crea una nueva empresa.
GET /api/companies/:companyId: Obtiene los detalles de una empresa específica.
PATCH /api/companies/:companyId: Actualiza la información de una empresa.
DELETE /api/companies/:companyId: Elimina una empresa.

### Contacto 📧
Arian Josafat – arianjosafat67@gmail.com
Hecho con ❤️ y JavaScript.
