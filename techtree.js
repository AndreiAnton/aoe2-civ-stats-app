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
    },
    siegeWorkshop: {
        ramLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Battering Ram",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                unitName: "Capped Ram",
                unitLevel: 2,
                civs: ["Britons", "Franks", "Goths", "Japanese", "Teutons", "Koreans", "Indians", "Italians", "Magyars", "Berbers", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Lithuanians"]
            },
            highestTier: {
                unitName: "Siege Ram",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Chinese", "Mongols", "Persians", "Saracens", "Turks", "Vikings", "Aztecs", "Huns", "Mayans", "Spanish", "Incas", "Slavs", "Ethiopians", "Khmer", "Bulgarians", "Cumans", "Tatars"]
            }
        },
        catapultLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Mangonel",
                unitLevel: 1,
                civs: ["Turks", "Huns"]
            },
            secondTier: {
                unitName: "Onager",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Vikings", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Berbers", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            },
            highestTier: {
                unitName: "Siege Onager",
                unitLevel: 3,
                civs: ["Celts", "Mongols", "Saracens", "Teutons", "Aztecs", "Koreans", "Slavs", "Ethiopians", "Malians", "Bulgarians", "Cumans"]
            }
        },
        scorpionLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Scorpion",
                unitLevel: 1,
                civs: ["Byzantines", "Saracens", "Aztecs", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Malians", "Portuguese", "Vietnamese", "Cumans", "Lithuanians"]
            },
            highestTier: {
                unitName: "Heavy Scorpion",
                unitLevel: 2,
                civs: ["Britons", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Turks", "Vikings", "Mayans", "Incas", "Magyars", "Slavs", "Berbers", "Ethiopians", "Burmese", "Khmer", "Malay", "Bulgarians", "Tatars"]
            }
        },
        cannonLine: {
            unavailable: ["Britons", "Celts", "Chinese", "Japanese", "Mongols", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Magyars", "Slavs", "Khmer", "Bulgarians", "Cumans", "Tatars"],
            highestTier: {
                unitName: "Bombard Cannon",
                unitLevel: 1,
                civs: ["Byzantines", "Franks", "Goths", "Persians", "Saracens", "Teutons", "Turks", "Koreans", "Spanish", "Indians", "Italians", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Lithuanians"]
            }
        }
    },
    dock: {
        galleyLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Galley",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                unitName: "War Galley",
                unitLevel: 2,
                civs: ["Aztecs", "Malians"]
            },
            highestTier: {
                unitName: "Galleon",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        fireLine: {
            unavailable: ["Vikings"],
            lowestTier: {
                unitName: "Fire Galley",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                unitName: "Fire Ship",
                unitLevel: 2,
                civs: ["Celts", "Chinese", "Saracens", "Turks", "Huns", "Indians", "Ethiopians", "Portuguese", "Burmese", "Vietnamese", "Bulgarians"]
            },
            highestTier: {
                unitName: "Fast Fire Ship",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Aztecs", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Magyars", "Slavs", "Berbers", "Malians", "Khmer", "Malay", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        demoLine: {
            unavailable: ["Koreans"],
            lowestTier: {
                unitName: "Demolition Raft",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                unitName: "Demolition Ship",
                unitLevel: 2,
                civs: ["Japanese", "Aztecs", "Incas", "Italians", "Magyars", "Slavs", "Ethiopians", "Burmese", "Khmer", "Malay", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            },
            highestTier: {
                unitName: "Heavy Demolition Ship",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Huns", "Mayans", "Spanish", "Indians", "Berbers", "Malians", "Portuguese", "Vietnamese"]
            }
        },
        cannonLine: {
            unavailable: ["Aztecs", "Huns", "Mayans", "Incas", "Cumans"],
            lowestTier: {
                unitName: "Cannon Galleon",
                unitLevel: 1,
                civs: ["Britons", "Celts", "Chinese", "Franks", "Goths", "Mongols", "Teutons", "Koreans", "Magyars", "Slavs", "Ethiopians", "Malians", "Bulgarians"]
            },
            highestTier: {
                unitName: "Elite Cannon Galleon",
                unitLevel: 2,
                civs: ["Byzantines", "Japanese", "Persians", "Saracens", "Turks", "Vikings", "Spanish", "Indians", "Italians", "Berbers", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            }
        }
    },
    defensiveStructures: {
        towerLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Watch Tower",
                unitLevel: 1,
                civs: ["Goths", "Huns", "Cumans"]
            },
            secondTier: {
                unitName: "Guard Tower",
                unitLevel: 2,
                civs: ["Franks", "Mongols", "Persians", "Vikings", "Aztecs", "Indians", "Magyars", "Slavs", "Berbers", "Tatars"]
            },
            highestTier: {
                unitName: "Keep",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Japanese", "Saracens", "Teutons", "Turks", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"]
            }
        },
        stoneWallLine: {
            unavailable: ["Goths", "Cumans"],
            lowestTier: {
                unitName: "Stone Wall",
                unitLevel: 1,
                civs: ["Persians", "Huns", "Magyars", "Malay", "Bulgarians"]
            },
            highestTier: {
                unitName: "Fortified Wall",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Japanese", "Mongols", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Vietnamese", "Lithuanians", "Tatars"]
            }
        },
        cannonLine: {
            unavailable: ["Britons", "Celts", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Indians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Burmese", "Khmer", "Bulgarians", "Cumans"],
            highestTier: {
                unitName: "Bombard Tower",
                unitLevel: 1,
                civs: ["Byzantines", "Chinese", "Teutons", "Turks", "Koreans", "Spanish", "Italians", "Portuguese", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            }
        }
    },
    monastery: {
        monkLine: {
            unavailable: [],
            lowestTier: {
                unitName: "Monk lv 1",
                unitLevel: 1,
                civs: ["Britons", "Celts", "Chinese", "Goths", "Persians", "Koreans", "Vietnamese", "Tatars"],
                description: "Mediocre Monastery"
            },
            fourthTier: {
                unitName: "Monk lv 2",
                unitLevel: 2,
                civs: ["Franks", "Mongols", "Vikings", "Huns", "Mayans", "Magyars", "Ethiopians", "Cumans"],
                description: "Can research Heresy"
            },
            thirdTier: {
                unitName: "Monk lv 3",
                unitLevel: 3,
                civs: ["Japanese", "Indians", "Italians", "Slavs", "Burmese", "Khmer", "Bulgarians"],
                description: "Can research Redemption"
            },
            secondTier: {
                unitName: "Monk lv 4",
                unitLevel: 4,
                civs: ["Byzantines", "Turks", "Incas", "Berbers", "Malians", "Portuguese", "Malay"],
                description: "Can research Heresy and Redemption"
            },
            highestTier: {
                unitName: "Monk lv 5",
                unitLevel: 5,
                civs: ["Saracens", "Teutons", "Aztecs", "Spanish", "Lithuanians"],
                description: "Monastery Full Tech Tree"
            },
        }
    }
};

let unitsCoeficients = [
    {
        unitName: "Long Swordsman",
        value: 40
    },
    {
        unitName: "Two-Handed Swordsman",
        value: 80
    },
    {
        unitName: "Champion",
        value: 110
    },
    {
        unitName: "Spearman",
        value: 30
    },
    {
        unitName: "Pikeman",
        value: 52
    },
    {
        unitName: "Halberdier",
        value: 77
    },
    {
        unitName: "Eagle Scout",
        value: 1
    },
    {
        unitName: "Eagle Warrior",
        value: 1
    },
    {
        unitName: "Elite Eagle Warrior",
        value: 1
    },
    {
        unitName: "Archer",
        value: 50
    },
    {
        unitName: "Crossbowman",
        value: 100
    },
    {
        unitName: "Arbalester",
        value: 130
    },
    {
        unitName: "Skirmisher",
        value: 1
    },
    {
        unitName: "Elite Skirmisher",
        value: 1
    },
    {
        unitName: "Imperial Skirmisher",
        value: 1
    },
    {
        unitName: "Cavalry Archer",
        value: 1
    },
    {
        unitName: "Heavy Cavalry Archer",
        value: 1
    },
    {
        unitName: "Hand Cannoneer",
        value: 1
    }
]