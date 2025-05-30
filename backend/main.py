from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal, engine
import models, schemas, crud, views

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/ingredientes", response_model=list[schemas.IngredienteOut])
def listar_ingredientes(db: Session = Depends(get_db)):
    return crud.get_ingredientes(db)

@app.get("/api/recetas", response_model=list[schemas.RecetaOut])
def listar_recetas(db: Session = Depends(get_db)):
    return crud.get_recetas(db)

@app.post("/api/recetas", response_model=schemas.RecetaOut)
def crear_receta(receta: schemas.RecetaCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_receta(db, receta)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/recetas/{id}", response_model=schemas.RecetaOut)
def obtener_receta(id: int, db: Session = Depends(get_db)):
    receta = crud.get_receta(db, id)
    if receta is None:
        raise HTTPException(status_code=404, detail="Receta no encontrada")
    return receta

@app.put("/api/recetas/{id}", response_model=schemas.RecetaOut)
def actualizar_receta(id: int, receta_data: schemas.RecetaCreate, db: Session = Depends(get_db)):
    receta = crud.update_receta(db, id, receta_data)
    if receta is None:
        raise HTTPException(status_code=404, detail="Receta no encontrada")
    return receta

@app.delete("/api/recetas/{id}")
def eliminar_receta(id: int, db: Session = Depends(get_db)):
    crud.delete_receta(db, id)
    return {"ok": True}

@app.get("/api/vista-recetas")
def vista_recetas(db: Session = Depends(get_db)):
    return views.get_vista_recetas(db)

