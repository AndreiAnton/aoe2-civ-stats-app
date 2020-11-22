let testVar = 'Aztecs takin over!';

let techTree = {
    barracks: {
        infantryLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Long Swordsman",
                unitLevel: 3,
                civs: ["Persians"]
            },
            secondTier: {
                unitName: "Two-Handed Swordsman",
                unitLevel: 4,
                civs: ["Huns", "Mayans", "Ethiopians", "Khmer", "Malay", "Bulgarians", "Tatars"]
            },
            highestTier: {
                unitName: "Champion",
                unitLevel: 5,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Koreans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Malians", "Portuguese", "Burmese", "Vietnamese", "Cumans", "Lithuanians"]
            }
        },
        spearLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Spearman",
                unitLevel: 1,
                civs: ["Turks"]
            },
            secondTier: {
                unitName: "Pikeman",
                unitLevel: 2,
                civs: ["Mongols", "Saracens", "Vikings", "Aztecs", "Italians", "Berbers", "Malians"]
            },
            highestTier: {
                unitName: "Halberdier",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Teutons", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Magyars", "Slavs", "Ethiopians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        eagleLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Turks", "Vikings", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"],
            lowestTier: {
                unitName: "Eagle Scout",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                unitName: "Eagle Warrior",
                unitLevel: 2,
                civs: []
            },
            highestTier: {
                unitName: "Elite Eagle Warrior",
                unitLevel: 3,
                civs: ["Aztecs", "Mayans", "Incas"]
            }
        }
    }
};

function name(params) {
    console.log(`Din interior param primit este: ${params}`);
}
const UNAVAILABLE = "unavailable";

// getCivBarracksHighestAvailableUnits

function getHighestRequestedLineAvailableUnit(civName, unitLine) {
    let response = UNAVAILABLE;

    if (!Object.keys(techTree.barracks).includes(unitLine)) {
        return "Unit line not found in object";
    }

    response = getHighestUnitLineUnit(techTree.barracks[unitLine], civName);

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