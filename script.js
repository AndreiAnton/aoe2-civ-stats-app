
// const REQUESTED_CIV = "Aztecs";
// const REQUESTED_CIV = "Britons";
// const REQUESTED_CIV = "Persians";
// const REQUESTED_CIV = "Mayans";
// const REQUESTED_UNIT_LINE = "eagleLine";
// const REQUESTED_UNIT_LINE = "infantryLine";
// const REQUESTED_BUILDING_NAME = "barracks";
const BUILDING_NAMES = [
    // "barracks",
    // "archeryRange",
    // "stable",
    // "siegeWorkshop",
    // "dock",
    // "defensiveStructures",
    "monastery",
    "blacksmith",
    "university"
];

// let civHighestBarrackInfantryUnit = getHighestRequestedLineAvailableUnit(REQUESTED_CIV, REQUESTED_UNIT_LINE, REQUESTED_BUILDING_NAME);
// console.log(`${REQUESTED_CIV}: ${civHighestBarrackInfantryUnit}`);

// let civBarracksHighestUnits = getCivBuildingHighestAvailableUnits(REQUESTED_CIV, REQUESTED_BUILDING_NAME);
// console.log(civBarracksHighestUnits);

document.getElementById('civ-attributes').innerHTML = 'Britons Attributes';
document.getElementById('civ-attributes').innerHTML = testVar;

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

// trebuie sa fac map peste civsArray
const fullCivArray = civsArray.map(civName => buildCivsInfoObject(civName, BUILDING_NAMES));
console.log(fullCivArray);

let civilisationsHtmlResponse = '';
fullCivArray.forEach(civ => {
    civilisationsHtmlResponse += '<div id="civ-name"><h2>' + civ.name + '</h2><div><h3>Highest Available Units:</h3>' + renderBuildingsUnits(civ.unittree) + '</div></div>';
})

document.getElementById('civs-container').innerHTML = civilisationsHtmlResponse;