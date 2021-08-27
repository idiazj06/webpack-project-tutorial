import Comentario from './comentario';
import './style.css';

async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias()
    console.log(res.categories);
}

console.log('ingreso!!')
inicio()