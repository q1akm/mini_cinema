import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';
const API_URL = "http://www.omdbapi.com?apikey=99b77db";
import SearchIcon from './assets/search.svg'
import Footer from './components/Footer';


const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect (()=> {
        searchMovies('batman');
    }, []);



  return (
   <div className=' text-black '>
      <div className='fixed flex justify-center max-md:hidden items-center border-2 border-black p-10 h-screen w-20'>
            <div className='font-mono '>
                <h1 className=' -rotate-90'>Cinema</h1>
                <br />
                <h1 className=' -rotate-90'>Mini</h1>
            </div>
        </div>
    <div className="flex flex-col justify-center items-center">

        <div className="flex  items-center w-full p-4 justify-center">

            <input 
            className='rounded-xl text-black w-96 bg-slate-500 p-3 pl-14'
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)} />

            <img
            className='w-7 mr-80 absolute cursor-pointer'
            src={SearchIcon} 
            alt="search"
            onClick={()=> searchMovies(searchTerm)} />

          

        </div>

       
        {movies ?.length > 0
            ?(
                <div className="p-5  flex justify-end max-md:justify-center items-center flex-wrap">
                    {movies.map((movie)=> (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className='mt-20'>
                    <h2>No movies found</h2>
                </div>
            )}

        </div>
        <Footer/>
   </div>
  )
}

export default App;