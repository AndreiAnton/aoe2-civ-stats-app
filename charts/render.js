// Chart Render functions

// return a div with a <canva> element for each building of that civ
function renderCivChartEmptyTemplate(civName) {
    let response = '';
    response += '<div>';
    // get selected civ object
    const selectedCiv = getEntityFromArray(fullCivArray, civName);

    // foreach building of that civ build a chart
    Object.keys(selectedCiv.coeficients).forEach(buildingName => {
        let buildingChart = '';
        buildingChart += '<div>';

        const chartId = `${civName}-${buildingName}-barChart`;
        buildingChart += '<canvas id="' + chartId + '" width="50" height="50"></canvas>';

        buildingChart += '</div>';
        response += buildingChart;
    })

    response += '</div>';
    return response;
}

// function for radar chart
function renderCivRadarChartEmptyTemplate(civName) {
    let response = '';
    response += '<div>';

    // get selected civ object
    const selectedCiv = getEntityFromArray(fullCivArray, civName);

    // foreach building of that civ build a chart
    Object.keys(selectedCiv.coeficients).forEach(buildingName => {
        let buildingChart = '';
        buildingChart += '<div>';

        const chartId = `${civName}-${buildingName}-radarChart`;
        buildingChart += '<canvas id="' + chartId + '" width="50" height="50"></canvas>';

        buildingChart += '</div>';
        response += buildingChart;
    })

    response += '</div>';
    return response;
}