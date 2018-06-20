// Traffic Charts Variables

const trfChart = document.getElementById('trfChart').getContext('2d');
const dlyChart = document.getElementById('dlyChart').getContext('2d');
const mblUser = document.getElementById('mblUser').getContext('2d');


// Traffic Chart
const userChart = new Chart(trfChart, {
  type: 'line',//
  data:{

    labels:[
            '16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'
           ],
    datasets:[
              {
                data:[ 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250
                     ],
                backgroundColor: "rgba(75,80,192,0.2)", // Can be Array
                borderColor: "rgba(75,72,192,1)",
                borderWidth: 1,
                pointBackgroundColor: '#fff',
                lineTension: 0,
                pointRadius: 5,
                lineCap: 'round',
              }
            ]
        },
  options:{
    responsive: true,
    legend: {
      display:false
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 50,
          suggestedMax: 2500
        }
      }]
    }
  }
});

// Bar Chart
const dailyChart = new Chart(dlyChart, {
  type: 'bar',//
  data:{

    labels:[
            'S','M','T','W','T','F','S'
           ],
    datasets:[
              {
                data:[ 75, 100, 175, 125, 225, 200, 100
                     ],
                backgroundColor: "#6760a9", // Can be Array
              }
            ]
        },
  options:{
    responsive: true,
    legend: {
      display:false
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 50,
          suggestedMax: 250,
          maxTicksLimit: 5
        }
      }]
    }
  }
});

// Pie Chart

const mobileChart = new Chart(mblUser, {
  type: 'doughnut',//
  data:{

    labels:[
            'PHONES','TABLETS','DESKTOP'
           ],
    datasets:[
              {
                data:[ 15,15,70
                     ],
                backgroundColor: [
                  '#7DBE6F',
                  'rgba(65, 182, 200, 1)',
                  '#6760a9',
                ]
              }
            ]
        },
  options:{
    responsive: true,
    legend: {
      display:false,
      position: 'right',
      labels: {
        boxWidth: 15
      }
    },
  }
});
