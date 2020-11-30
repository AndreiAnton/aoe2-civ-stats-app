
// Chart Functions

// returns an array with the unitLine coeficients of the given building
function getBuildingChartData(buildingObject) {
    let response = [];
    Object.keys(buildingObject).forEach(unitLine => {
        response.push(buildingObject[unitLine])
    })
    
    return response;
}
// returns an array with the unitLine names of the given building
function getBuildingChartLabels(buildingObject) {
    let response = [];
    Object.keys(buildingObject).forEach(unitLine => {
        response.push(unitLine)
    })
    response = response.map(unitLineSlug => mapUnitLineSlugToUnitLineNames(unitLineSlug))
    
    return response;
}

// builds a bar chart with the given arrays
function buildBarChart(valuesArray, labelsArray, chartId) {
    let buildingChart = document.getElementById(chartId);
    let singleCivBarChart = new Chart(buildingChart, {
        type: 'bar',
        data: {
            labels: labelsArray,
            datasets: [{
                label: 'Score',
                data: valuesArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
    
    return singleCivBarChart;
}

// Function that populates the charts with data
function buildCivCharts(civName) {
    // // get selected civ object
    const selectedCiv = getEntityFromArray(fullCivArray, civName);

    // foreach building of that civ populate a chart
    Object.keys(selectedCiv.coeficients).forEach(buildingName => {
        const chartId = `${civName}-${buildingName}-barChart`;
        // get the civ bar chart data
        barChartData = getBuildingChartData(selectedCiv.coeficients[buildingName]);
        // get the civ bar chart labels
        barChartLabels = getBuildingChartLabels(selectedCiv.coeficients[buildingName]);

        // build the building chart
        buildBarChart(barChartData, barChartLabels, chartId);
    })
}