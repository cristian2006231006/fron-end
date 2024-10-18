import React from 'react';

const ComentarioStats = ({ comentarios }) => {
  // Número de comentarios
  const numeroComentarios = comentarios.length;

  // Calificación promedio
  const calificacionPromedio = 
    numeroComentarios > 0 
      ? (comentarios.reduce((total, comentario) => total + comentario.calificacion, 0) / numeroComentarios).toFixed(1) 
      : 0;

  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {numeroComentarios}</h4>
      <h4>Calificación promedio: {calificacionPromedio}</h4>
    </div>
  );
};

export default ComentarioStats;
