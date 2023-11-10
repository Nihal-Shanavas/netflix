import React, { useEffect, useState } from 'react'
import instance from '../requestApis/baseurl'
import './Banner.css'


function Banner({fetchurl}) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movies,setMovies]=useState({})

    const fetchMovies=async()=>{
        const result =  await instance.get(fetchurl)
        // console.log(result.data.results);
        setMovies(result.data.results[Math.floor(Math.random()*(result.data.results.length-1))]);
    }

    console.log(movies);

    useEffect(()=>{
        fetchMovies()
    },[])

  return (
    <div className='banner' style={{ backgroundImage: `url(${base_url}${movies.backdrop_path})` }}>
        <h1 style={{marginTop:'350px',marginLeft:'14px',color:'red'}} className='titile'> {movies?.title}</h1>
        <div className='overview'>
            <h4>{movies.overview?.length>270?movies.overview.slice(0,270) + "...":movies.overview}</h4>
        </div>
    </div>
  )
}

export default Banner