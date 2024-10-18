import {React, useState} from 'react'
import Header  from './componentes/Header.jsx';
import ComentarioItem from './componentes/ComentarioItem.jsx';
import comentarios from './data/Comentarios.js';
import ComentarioLista from './componentes/ComentarioLista.jsx';
import ComentarioStats from './componentes/ComentarioStats.jsx';
import ComentarioForm from './componentes/ComentarioForm.jsx';

function App() {

    const [comments ,
        setComments] = useState(comentarios)

        const borrarItem=(id)=>{
            if(window.confirm
             ("Está seguro de borrar el comentario?")){
               //asignar nuevo estado a comments:
               //filter: para quitar los comentarios
               //cuyo id concuerde con el parametro
               console.log ("App", id);
                setComments(comments.filter((c)=> c.id !==  id ));
     
             }
         }
     

    const titulo = "App de Comentarios";
    const Autor = "Andrea Ortiz";
    const ficha = "2902093";
    const centro = "CGMLTI"
    

    const loading = false;
    if(loading === true ) return (<h1>Cargando comentarios</h1>)

      const addComentario=(newComentario) =>{
        //utilice el operador spread
        //para añadir el newComentario
        //a la lista de comentarios (state:commments)
        setComments ( [ ...comments, newComentario ] )
      }

  return (
    <div className='container'>
     <Header titulo={titulo} autor={Autor} ficha={ficha} centro={centro}/>
     <ComentarioForm handleAdd={addComentario}/>
     <ComentarioStats comentarios={comments}/>
     <ComentarioLista
     comments={comments}
     handleDelete={borrarItem} />
     
    </div>
  )
}

export default App