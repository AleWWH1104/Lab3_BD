from pydantic import BaseModel, Field, validator
from typing import List, Optional
from models import Dificultad, UnidadMedida, CategoriaIngrediente

class IngredienteBase(BaseModel):
    nombre: str
    categoria: CategoriaIngrediente
    unidad: UnidadMedida

class IngredienteCreate(IngredienteBase):
    pass

class IngredienteOut(IngredienteBase):
    id_ingrediente: int

    class Config:
        orm_mode = True

class RecetaIngredienteIn(BaseModel):
    id_ingrediente: int
    cantidad: int = Field(..., gt=0)

class RecetaBase(BaseModel):
    nombre: str
    descripcion: Optional[str]
    tiempo_de_preparacion: int = Field(..., gt=0)
    instrucciones: str
    dificultad: Dificultad

class RecetaCreate(RecetaBase):
    ingredientes: List[RecetaIngredienteIn]

class RecetaOut(RecetaBase):
    id_receta: int
    ingredientes: List[RecetaIngredienteIn]

    class Config:
        orm_mode = True

