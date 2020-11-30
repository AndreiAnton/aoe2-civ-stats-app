function getHighestRequestedLineAvailableUnit(civName, entityLine, buildingName, entityType) {
    let tree = {};
    if (entityType === 'unit') {
        tree = buildingAvailabilitiesTree
    } else {
        tree = upgradesAvailabilitiesTree
    }

    if (buildingName === null || buildingName === undefined) {
        return "Building name not specified!";
    }
    if (entityLine === null || entityLine === undefined) {
        return "Building name not specified!";
    }

    if (!Object.keys(tree).includes(buildingName)) {
        return "Building not found in Building Availabilities Tree!";
    }
    if (!Object.keys(tree[buildingName]).includes(entityLine)) {
        return "Entity line not found in Building Availabilities Tree!";
    }

    const response = getCivHighestAvailableEntity(tree[buildingName][entityLine], civName);

    return response;
}

function checkIfCivNameInArray(array, civName) {
    if (array.length > 0) {
        if(array.includes(civName)) {
            return true;
        }
    }
}

function getCivHighestAvailableEntity(entityLineObject, civName) {
    let highestAvailableEntity = UNAVAILABLE;
    Object.keys(entityLineObject).forEach(tierName => {
        if (tierName === UNAVAILABLE) {
            // array case
            if (checkIfCivNameInArray(entityLineObject[tierName], civName)) {
                highestAvailableEntity = UNAVAILABLE
            }
        } else {
            // object case
            if (checkIfCivNameInArray(entityLineObject[tierName].civs, civName)) {
                highestAvailableEntity = entityLineObject[tierName].entityName
            }
        }
    });
    return highestAvailableEntity;
}

function getCivBuildingHighestAvailableUnits(civName, buildingName) {
    let response = {};
    if (buildingAvailabilitiesTree.hasOwnProperty(buildingName)) {
        // foreach unit line from building get the highest result
        Object.keys(buildingAvailabilitiesTree[buildingName]).forEach(unitLine => {
            response[unitLine] = getHighestRequestedLineAvailableUnit(civName, unitLine, buildingName, 'unit');
        })
    }

    return response;
}

function getCivBuildingHighestAvailableTechnologies(civName, buildingName) {
    let response = {};
    if (upgradesAvailabilitiesTree.hasOwnProperty(buildingName)) {
        Object.keys(upgradesAvailabilitiesTree[buildingName]).forEach(upgradeLine => {
            response[upgradeLine] = getHighestRequestedLineAvailableUnit(civName, upgradeLine, buildingName, 'technology');
        })
    }

    return response;
}