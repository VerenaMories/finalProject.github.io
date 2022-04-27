import React from 'react';
import { useContext } from 'react';
import { MediaContext } from './../../MediaContext';
import style from "./People.module.css";



export default function People() {
  let baseImgUrl = "https://image.tmdb.org/t/p/original/";

  const {TrendingPerson} = useContext(MediaContext)

  return (
 <div className="row my-5">
    <div className="col-md-4 d-flex align-items-center ">
      <div className="w-100">
        <div className={`w-25 ${style.brdr} mb-3`}></div>
        <h2>Trending</h2>
        <h2>People</h2>
        <h2>To watch now</h2>
        <p className="secondColor mb-3">Most watched people by day</p>
        <div className={`w-100 ${style.brdr}`}></div>
      </div>
    </div>
    {TrendingPerson.map((person, index) => (
      <div className="col-md-2 my-3" key={index}>
        <div>
          <img
            className="w-100 mb-2"
            src={baseImgUrl + person.profile_path}
            alt=""
          />
          <h5> {person.name} </h5>
        </div>
      </div>
    ))}
  </div> 
  )
}
