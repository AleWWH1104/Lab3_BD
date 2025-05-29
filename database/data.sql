-- Ingredientes
INSERT INTO Ingredientes (nombre, categoria, unidad) VALUES 
('Harina', 'grano', 'gramos'),
('Azúcar', 'grano', 'gramos'),
('Huevos', 'proteína', 'unidad'),
('Leche', 'lácteo', 'mililitros'),
('Mantequilla', 'lácteo', 'gramos'),
('Sal', 'especia', 'gramos'),
('Pimienta', 'especia', 'gramos'),
('Pollo', 'proteína', 'gramos'),
('Cebolla', 'vegetal', 'gramos'),
('Ajo', 'vegetal', 'gramos'),
('Zanahoria', 'vegetal', 'gramos'),
('Tomate', 'fruta', 'gramos'),
('Pasta', 'grano', 'gramos'),
('Queso', 'lácteo', 'gramos'),
('Aceite de oliva', 'otro', 'mililitros');

-- Recetas
INSERT INTO Recetas (nombre, descripcion, tiempo_de_preparacion, instrucciones, dificultad) VALUES 
('Tortitas de Harina', 'Postre básico con ingredientes de cocina comunes', 20, 'Mezclar harina, azúcar, huevos y leche. Cocinar en sartén.', 'Fácil'),
('Pasta con Pollo', 'Plato fuerte con salsa de tomate y queso', 40, 'Cocinar pasta, sofreír pollo con vegetales, mezclar y servir con queso.', 'Media'),
('Sopa de Verduras', 'Comida ligera y nutritiva', 35, 'Hervir verduras picadas con sal y especias.', 'Fácil'),
('Huevos revueltos con cebolla', 'Desayuno rápido y sabroso', 10, 'Freír cebolla, añadir huevos batidos y cocinar.', 'Fácil'),
('Pollo al horno', 'Receta clásica', 60, 'Sazonar pollo con ajo y especias. Hornear hasta dorar.', 'Difícil'),
('Panqueques', 'Ideal para el desayuno', 25, 'Mezclar todos los ingredientes, cocinar en sartén.', 'Media');

-- Relaciones RecetaIngrediente (demuestra relaciones múltiples)
INSERT INTO RecetaIngrediente (id_receta, id_ingrediente, cantidad) VALUES
-- Tortitas de Harina
(1, 1, 200),  -- Harina
(1, 2, 100),  -- Azúcar
(1, 3, 2),    -- Huevos
(1, 4, 250),  -- Leche
(1, 5, 50),   -- Mantequilla
(1, 6, 2),    -- Sal

-- Pasta con Pollo
(2, 13, 300), -- Pasta
(2, 8, 200),  -- Pollo
(2, 9, 100),  -- Cebolla
(2, 11, 100), -- Zanahoria
(2, 12, 150), -- Tomate
(2, 14, 100), -- Queso
(2, 15, 20),  -- Aceite de oliva

-- Sopa de Verduras
(3, 9, 100),  -- Cebolla
(3, 10, 50),  -- Ajo
(3, 11, 100), -- Zanahoria
(3, 12, 150), -- Tomate
(3, 6, 2),    -- Sal
(3, 7, 1),    -- Pimienta

-- Huevos revueltos con cebolla
(4, 3, 2),    -- Huevos
(4, 9, 50),   -- Cebolla
(4, 5, 20),   -- Mantequilla
(4, 6, 1),    -- Sal

-- Pollo al horno
(5, 8, 500),  -- Pollo
(5, 10, 30),  -- Ajo
(5, 6, 3),    -- Sal
(5, 7, 1),    -- Pimienta
(5, 15, 30),  -- Aceite de oliva

-- Panqueques
(6, 1, 150),  -- Harina
(6, 2, 50),   -- Azúcar
(6, 3, 2),    -- Huevos
(6, 4, 200),  -- Leche
(6, 5, 50),   -- Mantequilla
(6, 6, 1);    -- Sal
