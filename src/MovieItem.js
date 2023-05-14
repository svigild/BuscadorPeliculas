import React from 'react';
import './App.css';

const Pelicula = (props) => {
  return (
    <div className='movie-item'>
      <h2 className='titulo-pelicula'>
        {props.propTitulo} ({props.propAñoEstreno})
      </h2>
      <img src={props.propLinkImagen} alt='Portada de la película' className='film-image' />
      <h3 className='puntuacion-pelicula'>
        Puntuación: {props.propPuntuacion} / 10
      </h3>
      <h5 className='descripcion-pelicula'>{props.propDescripcion}</h5>
    </div>
  );
};

export default Pelicula;