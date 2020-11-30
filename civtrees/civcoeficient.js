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

function getCivUniqueUpgradesCoeficients(upgradeLineName, civUniqueUpgradesTree) {
    // loop trough unique upgrades and add value for the given line
    let totalValue = 0;
    Object.keys(civUniqueUpgradesTree).forEach(uniqueUpgradeLineName => {
        if (uniqueUpgradeLineName === upgradeLineName) {
            totalValue += civUniqueUpgradesTree[uniqueUpgradeLineName].value
        }
    })
    return totalValue;
}

function getCivIndividualCoeficients(civBuildingUnitTechtree, civTechnologiesTree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) {
    let response = {};
    Object.keys(civBuildingUnitTechtree).forEach(entityLineName => {
        // get the base coeficient for the given unit
        response[entityLineName] = getUnitBaseCoeficient(civBuildingUnitTechtree[entityLineName]) +
            getCivCommonUpgradesCoeficients(civBuildingUnitTechtree[entityLineName], civTechnologiesTree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree);
    })

    return response;
}

function getCivCommonUpgradesCoeficients(unitName, civtechnologiestree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) {
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