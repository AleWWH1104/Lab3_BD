import { getVistaRecetas} from "../services/Requests";
import { useEffect, useState } from 'react';

export function useVista() {
    const [vista, setVista] = useState([]);

    const reloadVista = () => {
        return getVistaRecetas()
          .then(setVista)
    };
    
    useEffect(() => {
        reloadVista();
    }, []);
    
    return { vista, reloadVista };
}
