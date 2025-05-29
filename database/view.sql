-- Vista para mostrar recetas con ingredientes
CREATE VIEW Vista_Recetas_Ingredientes AS
SELECT
    r.id_receta,
    r.nombre AS nombre_receta,
    r.descripcion,
    r.tiempo_de_preparacion,
    r.dificultad,
    i.nombre AS ingrediente_nombre,
    i.categoria,
    ri.cantidad,
    i.unidad
FROM Recetas r
JOIN RecetaIngrediente ri ON r.id_receta = ri.id_receta
JOIN Ingredientes i ON i.id_ingrediente = ri.id_ingrediente;