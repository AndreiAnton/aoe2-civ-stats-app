const UNAVAILABLE = "unavailable";

function getHighestRequestedLineAvailableUnit(civName, entityLine, buildingName, entityType) {
    let tree = {};
    if (entityType === 'unit') {
        tree = techTree
    } else {
        tree = upgradesTechTree
    }

    if (buildingName === null || buildingName === undefined) {
        return "Building name not specified!";
    }
    if (entityLine === null || entityLine === undefined) {
        return "Building name not specified!";
    }

    if (!Object.keys(tree).includes(buildingName)) {
        return "Building not found in techtree!";
    }
    if (!Object.keys(tree[buildingName]).includes(entityLine)) {
        return "Entity line not found in techtree!";
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
    if (techTree.hasOwnProperty(buildingName)) {
        // foreach unit line from building get the highest result
        Object.keys(techTree[buildingName]).forEach(unitLine => {
            response[unitLine] = getHighestRequestedLineAvailableUnit(civName, unitLine, buildingName, 'unit');
        })
    }

    return response;
}

function getCivBuildingHighestAvailableTechnologies(civName, buildingName) {
    let response = {};
    if (upgradesTechTree.hasOwnProperty(buildingName)) {
        Object.keys(upgradesTechTree[buildingName]).forEach(upgradeLine => {
            response[upgradeLine] = getHighestRequestedLineAvailableUnit(civName, upgradeLine, buildingName, 'technology');
        })
    }

    return response;
}
function getCivUniqueTechnologies(civName) {
    let response = {};
    if (uniqueFeaturesTree.hasOwnProperty(civName)) {
        response = uniqueFeaturesTree[civName].uniqueUpgrades;
    }

    return response;
}
function getCivBonuses(civName) {
    let response = {};
    if (uniqueFeaturesTree.hasOwnProperty(civName)) {
        response = uniqueFeaturesTree[civName].civBonuses;
    }

    return response;
}
function getCivTeamBonuses(civName) {
    let response = {};
    if (uniqueFeaturesTree.hasOwnProperty(civName)) {
        response = uniqueFeaturesTree[civName].teamBonuses;
    }

    return response;
}

function getUnitBaseCoeficient(unitName) {
    if (unitName === UNAVAILABLE) {
        return 0;
    }
    const filteredUnits = unitsArray.filter(function (unitObj) {
        return unitObj.entityName === unitName;
    });

    return filteredUnits[0].value;
}

function getEntityFromArray(array, entityName) {
    const filteredArray = array.filter(function (entityObj) {
        return entityObj.entityName === entityName;
    });
    return filteredArray[0];
}


function getCivCommonUpgradesCoeficients(unitName, civtechnologiestree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) {
    // un nume mai bun ar fi get common upgrades coeficient
    if (unitName === UNAVAILABLE) {
        return 0;
    }
    let totalValue = 0;

    // get unit class
    const filteredUnit = getEntityFromArray(unitsArray, unitName);
    const unitClass = filteredUnit.unitClass;

    // get class upgrades, primeste unitClass si returneaza tipurile de upgradeuri care se aplica acelei clase
    // ex: arbalests => [rangedAttack, range, rateOfFire, accuracy, archerArmor, conversionDefense, creationSpeed]
    let classUpgrades = {};
    classUpgradesObject[unitClass].forEach(upgradeLine => {
        classUpgrades[upgradeLine] = []
    })

    // get civ upgrades, primeste (upgradeLine, upgradebuilding, civtechnologiestree)   !Aici nu intra unique upgrades,  si returneaza tehnologiile aferente
    // ex: british arbalets => {rangedAttack: [bracer, chemistry], range: [bracer], rateOfFire: [], accuracy: [ballistics], archerArmor: [ring aa], conversionDefense: [], creationSpeed: [consciptio]}
    function getCivUpgradeLineCommonUpgrades(upgradeLineName, civtechnologiestree) {
        Object.keys(civtechnologiestree).forEach(buildingName => {
            if (Object.keys(civtechnologiestree[buildingName]).includes(upgradeLineName) && civtechnologiestree[buildingName][upgradeLineName] !== UNAVAILABLE) {
                classUpgrades[upgradeLineName].push(civtechnologiestree[buildingName][upgradeLineName]);
            }
        })
    }
    let uniqueUpgradesTotalValue = 0;
    let civBonusesTotalValue = 0;
    let civTeamBonusesTotalValue = 0;
    Object.keys(classUpgrades).forEach(upgradeLineName => {
        getCivUpgradeLineCommonUpgrades(upgradeLineName, civtechnologiestree);
        // get civ upgradeline unique techs, primeste upgradeLine, uniquetechtree returneaza valoare per upgradeLine
        uniqueUpgradesTotalValue += getCivUniqueUpgradesCoeficients(upgradeLineName, civUniqueUpgradesTree);
        // get civ bonuses, primeste upgradeLine, civBonuses returneaza valoare per upgradeLine
        civBonusesTotalValue += getCivUniqueUpgradesCoeficients(upgradeLineName, civBonusesTree);
        // get civ team bonuses (pt ), primeste upgradeLine, civTeamBonusesTree returneaza valoare per upgradeLine
        civTeamBonusesTotalValue += getCivUniqueUpgradesCoeficients(upgradeLineName, civTeamBonusesTree);
    })
    console.log(classUpgrades)
    console.log(unitName)
    console.log(uniqueUpgradesTotalValue)
    console.log(civBonusesTotalValue)
    console.log(civTeamBonusesTotalValue)

    // get the coeficient for every upgrade found, add to the sum
    Object.keys(classUpgrades).forEach(upgradeLineName => {
        if(classUpgrades[upgradeLineName].length > 0){
            classUpgrades[upgradeLineName].forEach(upgradeName => {
                const upgrade = getEntityFromArray(upgradesArray, upgradeName);
                totalValue += upgrade.value;
            })
        }
    })

    // add the unique upgrades value to total
    totalValue += uniqueUpgradesTotalValue;
    // add the civ bonuses value to total
    totalValue += civBonusesTotalValue;
    // add the civ team bonuses value to total
    totalValue += civTeamBonusesTotalValue;
    
    return totalValue;
}

function getCivUniqueUpgradesCoeficients(upgradeLineName, civUniqueUpgradesTree) {
    // loop trough unique upgrades and add value for the given line
    let totalValue = 0;
    Object.keys(civUniqueUpgradesTree).forEach(uniqueUpgradeLineName => {
        if (uniqueUpgradeLineName === upgradeLineName) {
            // console.log(upgradeLineName)
            totalValue += civUniqueUpgradesTree[uniqueUpgradeLineName].value
        }
    })
    return totalValue;
}

function getCivIndividualCoeficients(civBuildingUnitTechtree, civTechnologiesTree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) {
    // console.log(civUniqueUpgradesTree)
    let response = {};
    Object.keys(civBuildingUnitTechtree).forEach(entityLineName => {
        // get the base coeficient for the given unit
        response[entityLineName] = getUnitBaseCoeficient(civBuildingUnitTechtree[entityLineName]) +
            getCivCommonUpgradesCoeficients(civBuildingUnitTechtree[entityLineName], civTechnologiesTree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree);
            
        // here I should add the upgrades coeficients
    })

    // console.log(response)
    return response;
}

function buildCivsInfoObject(civName, buildingNames) {
    let response = {
        name: civName,
        unittree: {},
        technologiestree: {},
        uniqueupgradestree: {},
        civbonusestree: {},
        civteambonusestree: {},
        coeficients: {}
    };

    buildingNames.forEach(buildingName => {
        response.unittree[buildingName] = getCivBuildingHighestAvailableUnits(civName, buildingName);
        response.technologiestree[buildingName] = getCivBuildingHighestAvailableTechnologies(civName, buildingName);
        // get civ unique upgrades tree
        response.uniqueupgradestree = getCivUniqueTechnologies(civName);
        // get civ bonuses tree
        response.civbonusestree = getCivBonuses(civName);
        // get civ team bonuses tree
        response.civteambonusestree = getCivTeamBonuses(civName);
    })

    Object.keys(response.unittree).forEach(buildingName => {
        response.coeficients[buildingName] = getCivIndividualCoeficients(response.unittree[buildingName], response.technologiestree, response.uniqueupgradestree, response.civbonusestree, response.civteambonusestree)
    })

    return response;
}

// Render Functions
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