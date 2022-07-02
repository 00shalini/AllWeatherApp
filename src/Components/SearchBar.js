import React, { useEffect,useState } from "react";
import "../Components/SearchBar.css"; 
import map from '../Components/Images/map.png';
import search from '../Components/Images/search.png';
import axios from 'axios';
import DailyWeather from "./DailyWeather";
import chart from '../Components/Images/chart.png';
import riseset from '../Components/Images/riseset.png';

const SearchBar = () => {

   const apiKey = "4fTLoR7yhYoQWw34krsNg52WntGbgTgQ";
   
 
   
   const [weatherData, setWeatherData] = useState();
   const [data, setData] = useState();
   const [city, setCity] = useState("");
   const [dailyData, setDailyData] = useState([]);
   



   const getWeatherDetails = (city) => {
    if (!city) return
    const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
    
    axios.get(apiUrl)
    .then((res) => {
       // console.log(res.data[0])
        getCurrentWeather(res.data[0].Key);
        getDailyWeatherDetails(res.data[0].Key);
        setWeatherData(res.data[0])
    }).catch((error) =>{
        console.log(error);
    })

   };
   
   const getCurrentWeather = (Key) => {
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${apiKey}`)
    .then((res) => {
       // console.log(res.data[0])
        setData(res.data[0])
    })
   }

   const getDailyWeatherDetails = (Key) => {
    
   const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${apiKey}`;
    axios.get(apiUrl)
    .then((res) => {
     //  console.log(res.data)
        setDailyData(res.data)
    }).catch((error) =>{
        console.log(error);
    })
   }

//    const getHourlyWeatherData = (Key) => {
//      const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${Key}?apikey=${apiKey}`;
//          axios.get(apiUrl)
//          .then((res) => {
//         console.log(res.data)
//         setHourlyData(res.data)
//          }).catch((error) => {
//             console.log(error)
//          })
//         }

 const handleChange = (e) => {
    e.preventDefault();
//     fetch(`${ApiUrl}/cities?namePrefix=${e.target.value}`, geoApioptions)
//     .then((data) => {
//      data.json().then((resp) => {
//         //  return {
//         //      options: resp.data.map((city) => {
//         //          return {
//         //              value: `${city.latitude} ${city.longitude}`,
//         //              label: `${city.name} ${city.countryCode}`,
//         //          };
//         //      }),
//         //  };
//         console.log(resp.data)
         
//     }).catch(err => console.log(err));
//  })
  
    setCity(e.target.value)
 
}


   const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        getWeatherDetails(city);
        
        // dailyData?.forecast?.forecastday?.map((item) =>  {
        //     handleDay(item.date)
        // })
       
      }
   }
   

    return (
        <div className="searchbar">
           
            <img src={map} alt="location" className="location"/>
            <img src={search} alt="search" className="search"/>
            
            <input type="text" value={city} onChange={handleChange} className="inputlocation" onKeyDown={handleKeyDown}/>
            {console.log(weatherData)}
            <div className="weatherCard">
            {dailyData?.DailyForecasts?.map((item) => {
               // console.log(item.Date)
                 return  <DailyWeather dailyData={item} date={item.Date}/>  
            })
            }
                
                </div>
                <img src={chart}  className="chart"/> 
                <div className="presshum">
                    <div className="block">Pressure 999hpa</div>
                    <div className="block">Humidity 79%</div>
                </div>   
                <img src={riseset} alt="sunrise sunset" className="sunset"/>
        </div>
    )
}

export default SearchBar;