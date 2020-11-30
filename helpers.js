// only declare generic functions here that can be used everywhere

// function that filters an array of objects and returns one object
function getEntityFromArray(array, entityName) {
    const filteredArray = array.filter(function (entityObj) {
        return entityObj.entityName === entityName;
    });
    return filteredArray[0];
}

// function that maps unitLine slug to unitLine name
function mapUnitLineSlugToUnitLineNames(unitSlugName) {
    const unitLineName = UNIT_LINE_NAMES[unitSlugName]
    return unitLineName;
}