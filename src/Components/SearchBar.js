import React, { useEffect,useState } from "react";
import "../Components/SearchBar.css"; 
import map from '../Components/Images/map.png';
import search from '../Components/Images/search.png';
import axios from 'axios';
import DailyWeather from "./DailyWeather";
import chart from '../Components/Images/chart.png';
import riseset from '../Components/Images/riseset.png';

const SearchBar = () => {

   const apiKey = "gbW2W4ig6rTSGwJt4jmCjdr8MU9J3Q5z";
   
 
   
   const [weatherData, setWeatherData] = useState();
   const [data, setData] = useState();
   const [city, setCity] = useState("");
   const [dailyData, setDailyData] = useState([]);
   const [searchData, setSearchData] = useState([]);   



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

 const handleChange = (e) => {
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`)
        .then((res) => {
           // console.log(res.data)
             setSearchData(res.data)
        }).catch(err => console.log(err));
 
    setCity(e.target.value)
 
}


   const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        getWeatherDetails(city);
        
      }
      if ( e.key === 'Enter') {
        document.getElementById("searcher").style.display = "none";
      }
   }

  
   

    return (
        
        <div className="searchbar">
           
            <img src={map} alt="location" className="location"/>
            <img src={search} alt="search" className="search"/>
            
            <input type="text" value={city} onChange={handleChange} className="inputlocation" onKeyDown={handleKeyDown}/>
            {/* {console.log(weatherData)} */}
            {console.log(searchData)}
        {searchData && searchData.map((item,i) =>{
            {console.log(item.LocalizedName)}
          return <div key={i} className="searchdata" id="searcher">{item.LocalizedName}</div>
        })}
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