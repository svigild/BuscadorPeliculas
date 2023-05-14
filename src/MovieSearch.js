import { useState } from 'react';
import MovieItem from './MovieItem';
import './App.css';

function BarraBusqueda(){
    
    //Obtengo el texto de la barra de búsqueda
    const [inputText, setInputText] = useState('');
    const [movieData, setMovieData] = useState([]);

    //Mi key de themoviedb
    const KEY = '14108d926efd6438dc28060d0bda5c03';

    //La página base de las portadas de las películas
    const imageBaseUrl = 'https://image.tmdb.org/t/p/';

    //Método que se llama al clicar el botón "Buscar"
    const buscar = () => {
        
            //Llamo a la API
            let textoIntroducido = inputText;

            //Sustituo los " " por %20 para que el enlace encuentre la película
            let textoModificado = textoIntroducido.replace(/\s/g, '%20');

            fetch('https://api.themoviedb.org/3/search/movie?api_key=' + KEY + '&query=' + textoModificado) // Reemplaza la URL con la URL de la API que deseas llamar
            .then(response => response.json())
            .then(data => {
            // Hacer algo con los datos de la API
            const results = data.results;
        
            const movies = results.map(movie => {
                return {
                  titulo: movie.title,
                  año: movie.release_date,
                  linkImagen: `${imageBaseUrl}w400${movie.poster_path}`,
                  puntuacion: movie.vote_average,
                  descripcion: movie.overview
                };
              });
              setMovieData(movies);
            })
            .catch(error => {
            // Manejar el error de la solicitud
            console.error('Error al llamar a la API:', error);
            });
        
        
    };
    
    return(
        <form>
            <div className='menu'>
                <h1 className='tituloPagina' >Buscador de Películas</h1>
                <input type="text" className="barra-busqueda" value={inputText} onChange={(event) => setInputText(event.target.value)}></input>
                <button type="button" onClick={buscar} className="boton-buscar">Buscar</button>
            </div>
            <div className='div-peliculas'>
                {movieData.map((movie, index) => (
                <MovieItem
                    key={index}
                    propTitulo={movie.titulo}
                    propAñoEstreno={movie.año}
                    propLinkImagen={movie.linkImagen}
                    propPuntuacion={movie.puntuacion}
                    propDescripcion={movie.descripcion}
                />
                ))}
            </div>
        </form>
    );
}

export default BarraBusqueda;