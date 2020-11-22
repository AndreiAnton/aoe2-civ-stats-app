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
    },
    archeryRange: {
        footArcherLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Archer",
                unitLevel: 1,
                civs: ["Spanish", "Bulgarians"]
            },
            secondTier: {
                unitName: "Crossbowman",
                unitLevel: 2,
                civs: ["Celts", "Franks", "Goths", "Persians", "Teutons", "Turks", "Huns", "Indians", "Slavs", "Berbers", "Burmese", "Cumans", "Lithuanians", "Tatars"]
            },
            highestTier: {
                unitName: "Arbalester",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Chinese", "Japanese", "Mongols", "Saracens", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Italians", "Magyars", "Ethiopians", "Malians", "Portuguese", "Khmer", "Malay", "Vietnamese"]
            }
        },
        skirmisherLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Skirmisher",
                unitLevel: 1,
                civs: ["Turks"]
            },
            highestTier: {
                unitName: "Elite Skirmisher",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            },
            specialTier: {
                unitName: "Imperial Skirmisher",
                unitLevel: 3,
                civs: ["Vietnamese"]
            },
        },
        horseArcherLine: {
            unavailable: ["Aztecs", "Mayans", "Incas"],
            lowestTier: {
                unitName: "Cavalry Archer",
                unitLevel: 1,
                civs: ["Teutons", "Vikings", "Italians", "Portuguese", "Malay"]
            },
            highestTier: {
                unitName: "Heavy Cavalry Archer",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Turks", "Huns", "Koreans", "Spanish", "Indians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Burmese", "Khmer", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        gunLine: {
            unavailable: ["Britons", "Celts", "Chinese", "Mongols", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Magyars", "Slavs", "Ethiopians", "Burmese", "Malay", "Vietnamese", "Bulgarians", "Cumans"],
            highestTier: {
                unitName: "Hand Cannoneer",
                unitLevel: 1,
                civs: ["Byzantines", "Franks", "Goths", "Japanese", "Persians", "Saracens", "Teutons", "Turks", "Koreans", "Spanish", "Indians", "Italians", "Berbers", "Malians", "Portuguese", "Khmer", "Lithuanians", "Tatars"]
            },
        }
    },
    stable: {
        lightCavalryLine: {
            unavailable: ["Aztecs", "Mayans", "Incas"],
            lowestTier: {
                unitName: "Scout Cavalry",
                unitLevel: 1,
                civs: ["Teutons"]
            },
            secondTier: {
                unitName: "Light Cavalry",
                unitLevel: 2,
                civs: ["Britons", "Chinese", "Franks", "Japanese", "Vikings", "Malians", "Portuguese", "Khmer", "Malay", "Vietnamese"]
            },
            highestTier: {
                unitName: "Hussar",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Goths", "Mongols", "Persians", "Saracens", "Turks", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Burmese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        heavyCavalryLine: {
            unavailable: ["Aztecs", "Mayans", "Incas", "Indians"],
            lowestTier: {
                unitName: "Knight",
                unitLevel: 1,
                civs: ["Saracens"]
            },
            secondTier: {
                unitName: "Cavalier",
                unitLevel: 2,
                civs: ["Britons", "Chinese", "Goths", "Japanese", "Mongols", "Turks", "Vikings", "Koreans", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars"]
            },
            highestTier: {
                unitName: "Paladin",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Franks", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"]
            }
        },
        camelRiderLine: {
            unavailable: ["Britons", "Celts", "Franks", "Goths", "Japanese", "Teutons", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Magyars", "Slavs", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"],
            lowestTier: {
                unitName: "Camel Rider",
                unitLevel: 1,
                civs: ["Cumans"]
            },
            highestTier: {
                unitName: "Heavy Camel Rider",
                unitLevel: 2,
                civs: ["Byzantines", "Chinese", "Mongols", "Persians", "Saracens", "Turks", "Berbers", "Ethiopians", "Malians", "Tatars"]
            },
            specialTier: {
                unitName: "Imperial Camel",
                unitLevel: 3,
                civs: ["Indians"]
            },
        },
        battleElephantLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"],
            lowestTier: {
                unitName: "Battle Elephant",
                unitLevel: 1,
                civs: []
            },
            highestTier: {
                unitName: "Elite Battle Elephant",
                unitLevel: 2,
                civs: ["Burmese", "Khmer", "Malay", "Vietnamese"]
            }
        },
        steppeLancerLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"],
            lowestTier: {
                unitName: "Steppe Lancer",
                unitLevel: 1,
                civs: []
            },
            highestTier: {
                unitName: "Elite Steppe Lancer",
                unitLevel: 2,
                civs: ["Mongols", "Cumans", "Tatars"]
            }
        }
    }
};