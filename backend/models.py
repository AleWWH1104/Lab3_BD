from sqlalchemy import Column, Integer, String, Text, ForeignKey, Enum, CheckConstraint, UniqueConstraint
from sqlalchemy.orm import relationship
from database import Base
import enum

# Enums personalizados
class Dificultad(str, enum.Enum):
    facil = "facil"
    media = "media"
    dificil = "dificil"

class UnidadMedida(str, enum.Enum):
    gramos = "gramos"
    mililitros = "mililitros"
    cucharadas = "cucharadas"
    tazas = "tazas"
    unidad = "unidad"

class CategoriaIngrediente(str, enum.Enum):
    vegetal = "vegetal"
    proteina = "proteína"
    grano = "grano"
    fruta = "fruta"
    lacteo = "lacteo"
    especia = "especia"
    otro = "otro"

class Ingrediente(Base):
    __tablename__ = "ingredientes"

    id_ingrediente = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), unique=True, nullable=False)
    categoria = Column(Enum(CategoriaIngrediente), nullable=False)
    unidad = Column(Enum(UnidadMedida), nullable=False)

class Receta(Base):
    __tablename__ = "recetas"

    id_receta = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), unique=True, nullable=False)
    descripcion = Column(Text)
    tiempo_de_preparacion = Column(Integer, nullable=False)
    instrucciones = Column(Text, nullable=False)
    #dificultad = Column(Enum(Dificultad), nullable=False)
    dificultad = Column(Enum(Dificultad, name="dificultad", native_enum=False), nullable=False)


    __table_args__ = (
        CheckConstraint('tiempo_de_preparacion > 0', name='check_tiempo'),
    )

    ingredientes = relationship("RecetaIngrediente", back_populates="receta", cascade="all, delete")

class RecetaIngrediente(Base):
    __tablename__ = "recetaingrediente"

    id_receta = Column(Integer, ForeignKey("recetas.id_receta", ondelete="CASCADE"), primary_key=True)
    id_ingrediente = Column(Integer, ForeignKey("ingredientes.id_ingrediente", ondelete="CASCADE"), primary_key=True)
    cantidad = Column(Integer, nullable=False)

    __table_args__ = (
        CheckConstraint('cantidad > 0', name='check_cantidad'),
    )

    receta = relationship("Receta", back_populates="ingredientes")
    ingrediente = relationship("Ingrediente")

