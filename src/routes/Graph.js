import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LogarithmicScale
  } from 'chart.js';
import { Line } from "react-chartjs-2";
import {arrayRange, evalFunction} from '../utils/math.js'
import generateChartData from "../utils/graph.js";


const Graph =  () => {
  const [inputFunction, setInputFunction] = useState("x^2");
  const [linearScale, setLinearScale] = useState(true);
  const intialchartData = generateChartData([2,3,4,5,6], [4,9,16,25,36], inputFunction )
  const [chartData, setChartData] = useState( intialchartData )
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LogarithmicScale,
    Title,
    Tooltip,
    Legend
  );
  

  const toggleScale = () => {
    setLinearScale(!linearScale);
    const options = {
      scales: {
        y: {
          type: linearScale ? "linear" : "logarithmic",
          beginAtZero: true,
        },
      },
    };
    setChartData((prevChartData) => ({ ...prevChartData, options }));
  };

  const computeChartData = (e) => {
    e.preventDefault()
    const xValues = arrayRange(-10, 10, 0.1);
    const yValues = xValues.map((x) => evalFunction(inputFunction, x)).map((value) => typeof value === "number"? value : null)
    const optionsChartData  = generateChartData(xValues, yValues, inputFunction )
    setChartData( optionsChartData );
  };


  return (
    <>
        <div className="container mt-5">
          <div className="row mt-3">
            <div className="col-md-10">
              <Line options={chartData.options} data={chartData} />
            </div>
            <div className="col-md-2">
                <button onClick={toggleScale} className="btn btn-primary">
                   Toggle Scale
                </button>
            </div>
          </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <input
                value={inputFunction}
                onChange={(e) => setInputFunction(e.target.value)}
                className="form-control mb-3"
                placeholder="Enter your function (e.g., x^2)"
              />
              <button onClick={computeChartData} className="btn btn-primary">
                Generate Chart
              </button>
            </div>
          </div>
    </>
    
  );
};

export default Graph;
