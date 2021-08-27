import {fetch as fetchPolyfill} from 'whatwg-fetch' 


class Comentario{
    
    async obtenerCategorias(){
        const rest = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        const categorias = await rest.json();
        return categorias
    }
}
export default Comentario;
