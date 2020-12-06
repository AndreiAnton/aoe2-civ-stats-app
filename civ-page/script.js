// get the selected civ name
let civPageSelectedCivName = localStorage.getItem('selectedCivilisationName');
const civsArray = [civPageSelectedCivName];

// console.log('Din pagina single')
// console.log(civsArray)

// return an array with objects for each civilisation, the object has a specific interface
const fullCivArray = civsArray.map(civName => buildCivsInfoObject(civName, BUILDING_NAMES));

console.log('Din pagina single')
console.log(fullCivArray)

// Render Logic
// return a div with the id of each civilisation, the div can have many components in the context of a civ like civ charts, civ available units, civ coeficients
let civilisationsHtmlResponse = '';
fullCivArray.forEach(civ => {
    civilisationsHtmlResponse += '<div id="civ-name">';
    // civilisationsHtmlResponse += '<h2>' + civ.entityName + '</h2>';
    // civilisationsHtmlResponse += '<a class="civ-link" data-selectedciv="' + civ.entityName + '" href="civ-page/civ.html">See More</a>';
    // civilisationsHtmlResponse += '' + renderCivChartEmptyTemplate(civ.entityName) + '';
    civilisationsHtmlResponse += '' + renderCivRadarChartEmptyTemplate(civ.entityName) + '';
    // civilisationsHtmlResponse += '<div>';
    // civilisationsHtmlResponse += '<h3>Highest Available Units:</h3>';
    // civilisationsHtmlResponse += '' + renderBuildingsUnits(civ.unittree) + '';
    // civilisationsHtmlResponse += '</div>';
    civilisationsHtmlResponse += '</div>';
})

// add dynamic build HTML content to root HTML element
document.getElementById('civ-page-container').innerHTML = civilisationsHtmlResponse;

// populate charts with values it is linked with the HTML part, when comment, comment both
fullCivArray.forEach(civ => {
    buildCivRadarCharts(civ.entityName)
})

// populate this page
document.getElementById('civ-page').innerHTML = civPageSelectedCivName;