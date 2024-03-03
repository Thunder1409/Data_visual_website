var country = 'api/country';

$.ajax({
    method: "GET",
    url: country,
    success: function(data) {
        const keys = [];
        const values = [];

        // Extract keys and values from data
        for (let key in data) {
            keys.push(key);
            values.push(data[key]);
        }

        // Reverse the arrays to make the chart descending
        keys.reverse();
        values.reverse();

        // Create the chart after extracting data
        var ctx = document.getElementById('country_chart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line', // Change chart type to 'line'
            data: {
                labels: keys,
                datasets: [{
                    label: 'Data',
                    data: values,
                    fill: true, // Fill the area under the line
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Darker area fill color
                    borderColor: 'rgba(54, 162, 235, 1)', // Line color
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'black' // Change y-axis label color to black
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black' // Change x-axis label color to black
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'black' // Change legend label color to black
                        }
                    }
                }
            }
        });
    }
});
