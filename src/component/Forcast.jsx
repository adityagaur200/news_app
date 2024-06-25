import React, { useEffect, useState } from 'react'

function Forcast() {
    const[Temp,setTemp] =useState(null)
    const[Condition,setCondition] =useState(null)
    const weather =async () =>{
        const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=28.6694&lon=77.4288&appid=09f6d1a4f7c8f72283e2d7163e14f9d0`
        const data = await fetch(weather_url)
        const parseddata = await data .json()
        console.log(parseddata)
        
        // setTemp(parseddata.main)
        setTemp(parseddata.main.feels_like)
        console.log(Temp)
        setCondition(parseddata.weather[0].description)
        

    }
    useEffect(()=>{
      weather();
    },[])
  return (
    <div className=''>
        <div className="card" style={{width : "10rem"}}>
        <div className="card-body">
             <p>{(Temp-273.15).toFixed(2)+'°C'}</p>
              {Condition}
        </div>
        </div>
    </div>
  )
}

export default Forcast
