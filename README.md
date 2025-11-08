# Laboratorio 3 - Base de Datos 1

Este proyecto es una aplicación web para gestionar recetas de cocina. Cuenta con un backend desarrollado en FastAPI, un frontend en React y una base de datos PostgreSQL.

## 🚀 Tech Stack

-   **Backend:** Python, FastAPI, SQLAlchemy
-   **Frontend:** React, Vite, Axios
-   **Base de Datos:** PostgreSQL
-   **Contenerización:** Docker, Docker Compose

## 📋 Prerrequisitos

-   Docker y Docker Compose instalados.
-   Node.js y npm.
-   Crear un archivo `.env` en la raíz del proyecto. Puedes usar el siguiente contenido:

```bash
# Configuración de la Base de Datos
POSTGRES_DB=recipesdb
POSTGRES_USER=user
POSTGRES_PASSWORD=password
DB_PORT=5432

# Configuración del Backend
BACKEND_PORT=8000
```

## ⚙️ Instalación y Ejecución

### 1. Backend y Base de Datos (con Docker)

Este comando levantará la base de datos y el backend.

1.  **Clona el repositorio y entra al directorio.**
2.  **Crea el archivo `.env`** en la raíz del proyecto con el contenido de arriba.
3.  **Levanta los servicios:**
    ```bash
    docker-compose up --build
    ```
    -   El backend estará disponible en `http://localhost:8000`.

### 2. Frontend (local)

1.  **Navega al directorio del frontend:**
    ```bash
    cd fronted
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta la aplicación de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en el puerto que indique Vite (normalmente `http://localhost:5173`).

## 📁 Estructura del Proyecto

```
.
├── backend/         # Código fuente del backend en FastAPI
├── database/        # Scripts de inicialización de la DB
├── fronted/         # Código fuente del frontend en React
├── .gitignore
├── docker-compose.yml
└── README.md
```

## 📄 API Endpoints

El backend expone una API RESTful. Puedes explorar la documentación interactiva generada por FastAPI en:

-   **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
-   **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)