// const civsArray = ["Aztecs", "Britons", "Persians", "Tatars", "Vietnamese", "Indians"];
// const civsArray = ["Britons", "Mayans", "Italians"];
// const civsArray = ["Britons", "Lithuanians", "Aztecs", "Vietnamese"];
// const civsArray = ["Aztecs", "Goths", "Teutons", "Lithuanians"];
// const civsArray = ["Aztecs", "Mayans", "Incas"];
// const civsArray = ["Mongols", "Tatars", "Cumans", "Saracens"];
// const civsArray = ["Spanish", "Turks", "Portuguese", "Italians"];
// const civsArray = ["Magyars", "Mongols", "Franks", "Turks"];
// const civsArray = ["Byzantines", "Celts", "Cumans", "Franks", "Huns", "Lithuanians", "Magyars", "Persians", "Spanish", "Teutons"];
// const civsArray = ["Berbers", "Indians", "Saracens", "Turks"];
// const civsArray = ["Burmese", "Khmer", "Malay", "Vietnamese"];
// const civsArray = ["Cumans", "Celts", "Mongols"];
// const civsArray = ["Chinese", "Celts", "Khmer"];
// const civsArray = ["Italians", "Portuguese", "Vikings"];
// const civsArray = ["Italians", "Portuguese", "Byzantines"];
// const civsArray = ["Italians", "Portuguese", "Turks"];
// const civsArray = ["Byzantines", "Teutons", "Koreans"];
// const civsArray = ["Byzantines", "Chinese", "Mayans"];
const civsArray = ["Aztecs", "Slavs", "Saracens", "Teutons", "Lithuanians"];
// const civsArray = ["Aztecs"];
// const civsArray = ["Franks"];

// return an array with objects for each civilisation, the object has a specific interface
const fullCivArray = civsArray.map(civName => buildCivsInfoObject(civName, BUILDING_NAMES));


// Render Logic
// return a div with the id of each civilisation, the div can have many components in the context of a civ like civ charts, civ available units, civ coeficients
let civilisationsHtmlResponse = '';
fullCivArray.forEach(civ => {
    civilisationsHtmlResponse += '<div id="civ-name"><h2>' + civ.entityName + '</h2>' + renderCivChartEmptyTemplate(civ.entityName) + '<div><h3>Highest Available Units:</h3>' + renderBuildingsUnits(civ.unittree) + '</div></div>';
})

// add dynamic build HTML content to root HTML element
document.getElementById('civs-container').innerHTML = civilisationsHtmlResponse;

// populate charts with values
fullCivArray.forEach(civ => {
    buildCivCharts(civ.entityName)
})