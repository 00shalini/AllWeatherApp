import React, { useEffect, useState } from "react";
import cloudy from '../Components/Images/cloudy.png';
import storm from '../Components/Images/storm.png';
import partlysunny from '../Components/Images/partlysunny.png';
import rainy from '../Components/Images/rainy.png';
import sunny from '../Components/Images/sunny.png';
import '../Components/DailyWeather.css';
import chart from '../Components/Images/chart.png';


const DailyWeather = ({dailyData,date}) => {
 
    
 
    const [currentDay, setCurrentDay]= useState([]);
    const [icon, setIcon] = useState([]);
   

    const getGivenDay = (date) => {
       
        const givenDate = new Date(date);
        const day = givenDate.getDay();

        switch(day) {
            case 0: setCurrentDay("Sun");
            break;
            case 1: setCurrentDay("Mon");
            break;
            case 2: setCurrentDay("Tue");
            break;
            case 3: setCurrentDay("Wed");
            break;
            case 4: setCurrentDay("Thu");
            break;
            case 5: setCurrentDay("Fri");
            break;
            case 6: setCurrentDay("Sat");
            break;
            default:
                setCurrentDay("default");
            break;
        }
      
    }

    const getIcon = (icon) => {
        switch(icon) {
            case "Thunderstorms": setIcon(storm);
            break;
            case "Rainy": setIcon(rainy);
            break;
            case "Partly sunny" : setIcon(partlysunny);
            break;
            case "Cloudy": setIcon(cloudy);
            break;
            case "Mostly cloudy": setIcon(cloudy);
            break;
            case "Sunny": setIcon(sunny);
            break;
            default:
                setIcon(sunny);
                break;

        }
    }

   
    
    useEffect(() => {
        
        getGivenDay(date);
        getIcon(dailyData.Day.IconPhrase);
        
    });

    return (
        <div>
        
        <div className="dailyWeather">
            <div className="weekDay">{currentDay}</div>
            {/* {console.log(dailyData)} */}
            <div className="temp"><p className="temper">{(((dailyData.Temperature.Maximum.Value)-32)*5/9).toFixed(0)}° </p>     <p className="temper"> {(((dailyData.Temperature.Minimum.Value)-32)*5/9).toFixed(0)}°</p></div>
            <div>
            <img src={icon} alt="weather icon" className="weatherIcon"/>
            </div>
            <div className="weather">{dailyData.Day.IconPhrase}</div>
            
              
         </div> 
         
        </div>
    )
}

export default DailyWeather;