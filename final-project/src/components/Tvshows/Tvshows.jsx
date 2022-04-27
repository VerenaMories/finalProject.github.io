import React from 'react';
import { useContext } from 'react';
import { MediaContext } from './../../MediaContext';
import style from "./Tvshows.module.css";


export default function Tvshows() {
  let baseImgUrl = "https://image.tmdb.org/t/p/original/";

const {TrendingTvShowes} = useContext(MediaContext)

  return (
    <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center ">
          <div className="w-100">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2 id='demo1'>Trending</h2>
            <h2>Tv shows</h2>
            <h2>To watch now</h2>
            <p className="secondColor mb-3">Most watched tv shows by day</p>
            <div className={`w-100 ${style.brdr}`}></div>
          </div>
        </div>
        {TrendingTvShowes.map((tv, index) => (
          <div className="col-md-2 my-3" key={index}>
            <div>
              <img
                className="w-100 mb-2"
                src={baseImgUrl + tv.backdrop_path}
                alt=""
              />
              <h5> {tv.name} </h5>
            </div>
          </div>
        ))}
      </div> 
  )
}
