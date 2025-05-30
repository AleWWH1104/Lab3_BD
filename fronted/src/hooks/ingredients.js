import { useEffect, useState } from 'react';
import { getAllIngredientes } from '../services/Requests';

export default function useIngredientes() {
    const [ingredientesSelect, setIngredientesSelect] = useState([]);
  
    useEffect(() => {
        getAllIngredientes()
            .then(setIngredientesSelect)
    }, []);
    
    return { ingredientesSelect };
}