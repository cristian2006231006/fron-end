import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = ({handleAdd}) => {

      const[text, setText] = useState('')
      const[calificacion , setCalificacion] = useState(0) 

      const handleTextChange = (e) => {
            setText( e.target.value )          
      }

      const handleSubmit=(e)=>{
            e.preventDefault()
            const Newcomentario = {
                  comentario:text,
                  calificacion:calificacion
           
           }      
           handleAdd(Newcomentario) 
      }
            
      

  return (
    <Card>
      <form action='' onSubmit={ handleSubmit }>
            <ComentarioCalificacion select={(calificacion)=>
                                           {setCalificacion(calificacion) } }/>
            <div className='input-group'>
                  <input type='text' value={text} onChange= {handleTextChange} placeholder='Ingrese su comentario aqui' />
                  <button type="submit">
                        Guardar
                  </button>
            </div>
      </form>
    </Card>
  )
}

export default ComentarioForm