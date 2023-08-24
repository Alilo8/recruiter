function togglePassword(id) {
  const x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("chart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      xAxes: [
        {
          display: false, //this will remove all the x-axis grid lines
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 5,
          },
        },
      ],
    },
  },
});


function loadName(){
  const href = window.location.href;
  const name = href.slice(href.indexOf('=')+1).replace('_',' ');
  const ele = document.getElementById('name');
  ele.innerHTML = name;
}


function toggleWindow(){
  const e = document.getElementById('window')
  e.classList.toggle('active')
}