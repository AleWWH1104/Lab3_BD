-- Tipos personalizados
CREATE TYPE dificultad_tipo AS ENUM ('facil', 'media', 'dificil');
CREATE TYPE unidad_medida AS ENUM ('gramos', 'mililitros', 'cucharadas', 'tazas', 'unidad');
CREATE TYPE categoria_ingrediente AS ENUM ('vegetal', 'proteina', 'grano', 'fruta', 'lacteo', 'especia', 'otro');


-- Tabla de ingredientes
CREATE TABLE Ingredientes (
    id_ingrediente SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    categoria categoria_ingrediente NOT NULL,
    unidad unidad_medida NOT NULL
);

-- Tabla de recetas
CREATE TABLE Recetas (
    id_receta SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    tiempo_de_preparacion INTEGER CHECK (tiempo_de_preparacion > 0),
    instrucciones TEXT NOT NULL,
    dificultad dificultad_tipo NOT NULL
);

-- Tabla intermedia RecetaIngrediente
CREATE TABLE RecetaIngrediente (
    id_receta INTEGER NOT NULL,
    id_ingrediente INTEGER NOT NULL,
    cantidad INTEGER CHECK (cantidad > 0),
    PRIMARY KEY (id_receta, id_ingrediente),
    FOREIGN KEY (id_receta) REFERENCES Recetas(id_receta) ON DELETE CASCADE,
    FOREIGN KEY (id_ingrediente) REFERENCES Ingredientes(id_ingrediente) ON DELETE CASCADE
);
