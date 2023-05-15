import Chart from 'chart.js/auto'

//barChart code
const bar_Chart = document.getElementById('barChart');
new Chart(bar_Chart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Indigo'],
      datasets: [{
        barBackgroundColor: "#17b727a3",
        label: 'Bars',
        data: [12, 19, 3, 5, 2, 3,10],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })


  //scatterChart code
const scatter_Chart = document.getElementById('scatterChart');
const xyValues = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

new Chart(scatter_Chart, {
    type: "scatter",
    data: {
      datasets: [{
        label: 'Scatter',
        pointRadius: 4,
        pointBackgroundColor: "rgba(65, 0, 230, 0.827)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  })



// linegraph
const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];
const line_Graph = document.getElementById('lineGraph');

new Chart(line_Graph, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label:"grow",
      fill: false,
      lineTension: .2,
      backgroundColor: "#17b727",
      borderColor: "rgba(65, 0, 230, 0.5)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});


//multiple Lines
const muLines = document.getElementById('muLines');
const xxValues = [100,200,300,400,500,600,700,800,900,1000];
new Chart(muLines, {
  type: "line",
  data: {
    labels: xxValues,
    datasets: [{ 
      label:"red",
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      label:"green",
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      label:"blue",
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});



// //Linear Graphs
// const linearGraphs = document.getElementById('linearGraphs');

// const lgxValues = [];
// const lgyValues = [];
// generateData("x * 2 + 7", 0, 10, 0.5);

// new Chart(linearGraphs, {
//   type: "line",
//   data: {
//     labels: lgxValues,
//     datasets: [{
//       fill: false,
//       pointRadius: 1,
//       borderColor: "rgba(255,0,0,0.5)",
//       data: lgyValues
//     }]
//   },    
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "y = x * 2 + 7",
//       fontSize: 16
//     }
//   }
// });
// function generateData(value, i1, i2, step = 1) {
//   for (let x = i1; x <= i2; x += step) {
//     yValues.push(eval(value));
//     xValues.push(x);
//   }
// }


// //Function Graphs
// const fxnGraphs = document.getElementById('fxnGraphs');
// var fgxValues = [];
// var fgyValues = [];
// generateData(fxnGraphs, 0, 10, 0.5);

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: fgxValues,
//     datasets: [{
//       fill: false,
//       pointRadius: 2,
//       borderColor: "rgba(0,0,255,0.5)",
//       data: fgyValues
//     }]
//   },    
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "y = sin(x)",
//       fontSize: 16
//     }
//   }
// });
// function generateData(value, i1, i2, step = 1) {
//   for (let x = i1; x <= i2; x += step) {
//     fgyValues.push(eval(value));
//     fgxValues.push(x);
//   }
//   console.log("here")

// }