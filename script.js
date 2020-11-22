
const REQUESTED_CIV = "Aztecs";
// const REQUESTED_CIV = "Britons";
// const REQUESTED_CIV = "Persians";
// const REQUESTED_CIV = "Mayans";
// const REQUESTED_UNIT_LINE = "eagleLine";
const REQUESTED_UNIT_LINE = "infantryLine";
const REQUESTED_BUILDING_NAME = "barracks";

let civHighestBarrackInfantryUnit = getHighestRequestedLineAvailableUnit(REQUESTED_CIV, REQUESTED_UNIT_LINE, REQUESTED_BUILDING_NAME);
console.log(`${REQUESTED_CIV}: ${civHighestBarrackInfantryUnit}`);

let civBarracksHighestUnits = getCivBuildingHighestAvailableUnits(REQUESTED_CIV, REQUESTED_BUILDING_NAME);
console.log(civBarracksHighestUnits);

document.getElementById('civ-attributes').innerHTML = 'Britons Attributes';
document.getElementById('civ-attributes').innerHTML = testVar;