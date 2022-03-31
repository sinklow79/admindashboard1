const centerChart = document.getElementById("myChart");
new Chart (centerChart, {
    type: 'line',
    data: {
        labels: ['Jan','Feb',"Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
            {
                label: 'BTC',
                data: [29384,33547,49623,59095,57828,36683,33672,28382,67978,44444,33333,40000],
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,.5)',
                borderWidth: 2,
                yAxisID: 'y',
            },
            {
                label: 'ETH',
                data: [12334,11223,32323,23232,43434,12121,57878,45454,33333, 15151,10000,12000,],
                borderColor: 'blue',
                backgroundColor: 'rgba(0,0,255,.5)',
                borderWidth: 2,
                yAxisID: 'y',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 100000,
            }
        }
    }
})