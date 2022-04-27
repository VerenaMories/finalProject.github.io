import {createContext} from 'react';
import axios from "axios";
import  { useEffect, useState } from "react";



export let MediaContext= createContext([]);


export function MediaContextProvider(props){
   const [TrendingMovies, setTrendingMovies] = useState([]);
   const [TrendingTvShowes, setTrendingTvShowes] = useState([]);
   const [TrendingPerson, setTrendingPerson] = useState([]);
  
  
    async function GetTrendingItems(mediaType, callback) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=e8ff797d49a52b9e57c698386271adf8`
      );
     
      callback(data.results.slice(0,10));
  
    }
  
 useEffect(() => {
  GetTrendingItems("movie", setTrendingMovies);
  GetTrendingItems("tv", setTrendingTvShowes);
  GetTrendingItems("person", setTrendingPerson);
      
    }, []);  

  return <MediaContext.Provider  value={ {TrendingMovies,
    TrendingTvShowes,TrendingPerson
  }}>

{props.children}
    </MediaContext.Provider>
 

}