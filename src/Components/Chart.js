import React from "react";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart  = ({hourlyData}) => {

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "weather by hour"
        },
        axisY: {
            title: "temperature",
            suffix: "C"
        },
        axisX: {
            title: "hour",
            prefix: "H",
            
        },
        data: [{
            type: "line",
            toolTipContent: "Hour {x}: {y}C",
            dataPoints: [
                {x:hourlyData?.map((item) => item.DateTime), y:hourlyData?.map((item) => (((item.Temperature.Value)-32)*5/9).toFixed(0))}
            ]
        }]
    }
   
    return (
        <>
        {/* {console.log(hourData)} */}
        <CanvasJSChart options={options}/>
        </>
    )
}

export default Chart;