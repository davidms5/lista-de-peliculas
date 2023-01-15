import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/listaPeliculas';
import HeadingPeliculas from './components/headingPeliculas';
import Busqueda from './components/busqueda';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async function(searchValue) {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=11bdecb6`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
	return (
		<div className='container-fluid movie-app'>
      <HeadingPeliculas heading="peliculas"/>
      <Busqueda searchValue={searchValue} setSearchValue={setSearchValue}/>
			<div className='row d-flex align-items-center mt-4 mb-4'>
        
        
        <MovieList movies={movies}/>
			</div>
		</div>
	);
};

export default App;