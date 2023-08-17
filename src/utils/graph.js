const generateChartData = (xValues = [1, 2, 3, 4], yValues = [1, 4, 9, 16], inputFunction) =>{
    return {
        labels: xValues,
        datasets: [
          {
            label: inputFunction,
            data: yValues,
            fill: false,
            pointRadius: 0,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }
}

export default generateChartData
