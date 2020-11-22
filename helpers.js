const UNAVAILABLE = "unavailable";

function getHighestRequestedLineAvailableUnit(civName, unitLine, buildingName) {
    if (buildingName === null || buildingName === undefined) {
        return "Building name not specified!";
    }
    if (unitLine === null || unitLine === undefined) {
        return "Building name not specified!";
    }

    if (!Object.keys(techTree).includes(buildingName)) {
        return "Building not found in techtree!";
    }
    if (!Object.keys(techTree[buildingName]).includes(unitLine)) {
        return "Unit line not found in techtree!";
    }

    const response = getHighestUnitLineUnit(techTree[buildingName][unitLine], civName);

    return response;
}

function checkIfCivNameInArray(array, civName) {
    if (array.length > 0) {
        if(array.includes(civName)) {
            return true;
        }
    }
}

function getHighestUnitLineUnit(unitLineObject, civName) {
    let highestUnit = UNAVAILABLE;
    Object.keys(unitLineObject).forEach(key => {
        if (key === UNAVAILABLE) {
            // array case
            if (checkIfCivNameInArray(unitLineObject[key], civName)) {
                highestUnit = UNAVAILABLE
            }
        } else {
            // object case
            if (checkIfCivNameInArray(unitLineObject[key].civs, civName)) {
                highestUnit = unitLineObject[key].unitName
            }
        }
    });
    return highestUnit;
}

function getCivBuildingHighestAvailableUnits(civName, buildingName) {
    let response = {};
    // foreach unit line from building get the highest result
    Object.keys(techTree[buildingName]).forEach(unitLine => {
        response[unitLine] = getHighestRequestedLineAvailableUnit(civName, unitLine, buildingName);
    })

    return response;
}

function buildCivsInfoObject(civName, buildingNames) {
    let response = {
        name: civName,
        techtree: {}
    };

    buildingNames.forEach(buildingName => {
        response.techtree[buildingName] = getCivBuildingHighestAvailableUnits(civName, buildingName)
    })

    return response;
}

function renderBuildingsNames(buildingName) {
    switch (buildingName) {
        case "barracks":
            return "Barracks"
        case "archeryRange":
            return "Archery Range"
        case "stable":
            return "Stable"
    
        default:
            return "Building Name"
    }
}

function renderBuildingUnits(buildingUnits) {
    let response = '';
    Object.keys(buildingUnits).forEach(unit => {
        response += '<li>' + buildingUnits[unit] + '</li>'
    })
    
    return response;
}

function renderBuildingsUnits(buildingTechTree) {
    let response = '';
    Object.keys(buildingTechTree).forEach(building => {
        response += '<span>' + renderBuildingsNames(building) + ':</span><ul>' + renderBuildingUnits(buildingTechTree[building]) + '</ul>';
    });

    return response;
}