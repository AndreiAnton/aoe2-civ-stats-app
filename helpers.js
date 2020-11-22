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

function getUnitBaseCoeficient(unitName) {
    if (unitName === UNAVAILABLE) {
        return 0;
    }
    const filteredCoeficients = unitsCoeficients.filter(function (unitObj) {
        return unitObj.unitName === unitName;
    });

    return filteredCoeficients[0].value;
}

function getCivIndividualCoeficients(civTechtree) {
    let response = {};
    Object.keys(civTechtree).forEach(unitLineName => {
        response[unitLineName] = getUnitBaseCoeficient(civTechtree[unitLineName]);
    })

    return response;
}

function buildCivsInfoObject(civName, buildingNames) {
    let response = {
        name: civName,
        techtree: {},
        coeficients: {}
    };

    buildingNames.forEach(buildingName => {
        response.techtree[buildingName] = getCivBuildingHighestAvailableUnits(civName, buildingName)
    })

    Object.keys(response.techtree).forEach(buildingName => {
        response.coeficients[buildingName] = getCivIndividualCoeficients(response.techtree[buildingName])
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
        case "siegeWorkshop":
            return "Siege Workshop"
        case "dock":
            return "Dock"
        case "defensiveStructures":
            return "Defensive Structures"
        case "monastery":
            return "Monastery"
    
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