from sqlalchemy.orm import Session
import models, schemas

def get_ingredientes(db: Session):
    return db.query(models.Ingrediente).all()

def get_recetas(db: Session):
    return db.query(models.Receta).all()

def get_receta(db: Session, receta_id: int):
    return db.query(models.Receta).filter(models.Receta.id_receta == receta_id).first()

def create_receta(db: Session, receta: schemas.RecetaCreate):
    db_receta = models.Receta(**receta.dict(exclude={"ingredientes"}))
    db.add(db_receta)
    db.flush()  # para obtener id_receta

    for ri in receta.ingredientes:
        ingrediente = db.query(models.Ingrediente).filter_by(id_ingrediente=ri.id_ingrediente).first()
        if not ingrediente:
            raise ValueError("Ingrediente no encontrado")
        receta_ingrediente = models.RecetaIngrediente(
            id_receta=db_receta.id_receta,
            id_ingrediente=ri.id_ingrediente,
            cantidad=ri.cantidad
        )
        db.add(receta_ingrediente)

    db.commit()
    db.refresh(db_receta)
    return db_receta

def update_receta(db: Session, receta_id: int, receta_data: schemas.RecetaCreate):
    receta = get_receta(db, receta_id)
    if not receta:
        return None

    for attr, value in receta_data.dict(exclude={"ingredientes"}).items():
        setattr(receta, attr, value)

    db.query(models.RecetaIngrediente).filter_by(id_receta=receta_id).delete()
    for ri in receta_data.ingredientes:
        db.add(models.RecetaIngrediente(
            id_receta=receta_id,
            id_ingrediente=ri.id_ingrediente,
            cantidad=ri.cantidad
        ))

    db.commit()
    db.refresh(receta)
    return receta

def delete_receta(db: Session, receta_id: int):
    receta = get_receta(db, receta_id)
    if receta:
        db.delete(receta)
        db.commit()

