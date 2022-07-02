import React from "react";
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart  = () => {

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        
        axisY: {
            title: "temperature",
            
        },
        axisX: {
            title: "hour",
            interval: 1
            
        },
        
        data: [{
            type: "spline",
            toolTipContent: "Hour {x} - {y}°C",
            dataPoints: [
                { x: 1, y: 24 },
					{ x: 2, y:  20 },
					{ x: 3, y: 24 },
					{ x: 4, y: 22 },
					{ x: 5, y: 24 },
					{ x: 6, y: 20 },
					{ x: 7, y: 28 },
					{ x: 8, y: 29 },
					{ x: 9, y: 23 },
					{ x: 10, y: 24 },
					{ x: 11, y: 21 },
					{ x: 12, y: 20 },
					{ x: 13, y: 25 },
					{ x: 14, y: 20 },
					{ x: 15, y: 26 },
					{ x: 16, y: 20 },
					{ x: 17, y: 29 },
					{ x: 18, y: 23 },
					{ x: 19, y: 28 },
					{ x: 20, y: 24 },
					{ x: 21, y: 29 },
					{ x: 22, y: 24 },
					{ x: 23, y: 29 },
                    {x: 24, y:23}
            ]
        }]
    }
   
    return (
        <>
        {/* {console.log(hourData)} */}
        <div>
        <CanvasJSChart options={options}/>
        </div>
        </>
    )
}

export default Chart;