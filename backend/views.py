from sqlalchemy import text
from sqlalchemy.orm import Session

def get_vista_recetas(db: Session):
    result = db.execute(text("SELECT * FROM vista_recetas_ingredientes")).fetchall()
    return [row._asdict() for row in result]

