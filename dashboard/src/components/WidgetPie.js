import React from 'react';
import './dashboard.css';

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
function WidgetPie(props){
                  
                  
// Create a JSON object to store the chart configurations

const chartConfigs = {
    type: "Pie3d", // The chart type
    width: "97%", // Width of the chart
    height: "200", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
    "use3DLighting": "0",
    bgColor:"#2a2a2a",
    "showPercentValues": "1",
    "decimals": "1",
    "useDataPlotColorForLabels": "1",
    "theme": "fusion"               //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: props.data
    }
  };
    return (
      <div>
        
         <div className="widgetWrap">
            <div className="widgetTitle">
                {props.title}
            </div>
            <div className="widgetValue">
            <ReactFC{...chartConfigs}/>
                  
                   </div>

        </div>
      </div>
    )
  
}

export default WidgetPie;
