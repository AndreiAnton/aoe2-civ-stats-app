
const REQUESTED_CIV = "Aztecs";
const REQUESTED_UNIT_LINE = "eagleLine";

let civHighestBarrackInfantryUnit = getHighestRequestedLineAvailableUnit(REQUESTED_CIV, REQUESTED_UNIT_LINE);
console.log(`${REQUESTED_CIV}: ${civHighestBarrackInfantryUnit}`);

document.getElementById('civ-attributes').innerHTML = 'Britons Attributes';
document.getElementById('civ-attributes').innerHTML = testVar;