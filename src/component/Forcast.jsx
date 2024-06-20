import React, { useState } from 'react'

function Forcast() {
    const[Temp,setTemp] =useState([])
    const weather =async () =>{
        const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=28.6694&lon=77.4288&appid=09f6d1a4f7c8f72283e2d7163e14f9d0`
        const data = await fetch(weather_url)
        const parseddata = await data .json()
        console.log(parseddata)
        setTemp(parseddata.temp)
    }
  return (
    <div className=''>
        <div className="card" style={{width : "10rem"}}>
        <div className="card-body">
        
        </div>
        </div>
    </div>
  )
}

export default Forcast
