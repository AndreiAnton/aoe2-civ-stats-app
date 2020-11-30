function buildCivsInfoObject(civName, buildingNames) {
    let response = {
        entityName: civName,
        unittree: {},
        technologiestree: {},
        uniqueupgradestree: {},
        civbonusestree: {},
        civteambonusestree: {},
        coeficients: {}
    };

    buildingNames.forEach(buildingName => {
        if (MILITARY_BUILDINGS_NAME_ARRAY.includes(buildingName) ) {
            response.unittree[buildingName] = getCivBuildingHighestAvailableUnits(civName, buildingName);
        }
        
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