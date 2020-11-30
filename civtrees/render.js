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