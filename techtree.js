let testVar = 'Aztecs takin over!';

let techTree = {
    barracks: {
        infantryLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Long Swordsman",
                unitLevel: 3,
                civs: ["Persians"]
            },
            secondTier: {
                entityName: "Two-Handed Swordsman",
                unitLevel: 4,
                civs: ["Huns", "Mayans", "Ethiopians", "Khmer", "Malay", "Bulgarians", "Tatars"]
            },
            highestTier: {
                entityName: "Champion",
                unitLevel: 5,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Koreans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Malians", "Portuguese", "Burmese", "Vietnamese", "Cumans", "Lithuanians"]
            }
        },
        spearLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Spearman",
                unitLevel: 1,
                civs: ["Turks"]
            },
            secondTier: {
                entityName: "Pikeman",
                unitLevel: 2,
                civs: ["Mongols", "Saracens", "Vikings", "Aztecs", "Italians", "Berbers", "Malians"]
            },
            highestTier: {
                entityName: "Halberdier",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Teutons", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Magyars", "Slavs", "Ethiopians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        eagleLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Turks", "Vikings", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"],
            lowestTier: {
                entityName: "Eagle Scout",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Eagle Warrior",
                unitLevel: 2,
                civs: []
            },
            highestTier: {
                entityName: "Elite Eagle Warrior",
                unitLevel: 3,
                civs: ["Aztecs", "Mayans", "Incas"]
            }
        }
    },
    archeryRange: {
        footArcherLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Archer",
                unitLevel: 1,
                civs: ["Spanish", "Bulgarians"]
            },
            secondTier: {
                entityName: "Crossbowman",
                unitLevel: 2,
                civs: ["Celts", "Franks", "Goths", "Persians", "Teutons", "Turks", "Huns", "Indians", "Slavs", "Berbers", "Burmese", "Cumans", "Lithuanians", "Tatars"]
            },
            highestTier: {
                entityName: "Arbalester",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Chinese", "Japanese", "Mongols", "Saracens", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Italians", "Magyars", "Ethiopians", "Malians", "Portuguese", "Khmer", "Malay", "Vietnamese"]
            }
        },
        skirmisherLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Skirmisher",
                unitLevel: 1,
                civs: ["Turks"]
            },
            highestTier: {
                entityName: "Elite Skirmisher",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            },
            specialTier: {
                entityName: "Imperial Skirmisher",
                unitLevel: 3,
                civs: ["Vietnamese"]
            },
        },
        horseArcherLine: {
            unavailable: ["Aztecs", "Mayans", "Incas"],
            lowestTier: {
                entityName: "Cavalry Archer",
                unitLevel: 1,
                civs: ["Teutons", "Vikings", "Italians", "Portuguese", "Malay"]
            },
            highestTier: {
                entityName: "Heavy Cavalry Archer",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Turks", "Huns", "Koreans", "Spanish", "Indians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Burmese", "Khmer", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        gunLine: {
            unavailable: ["Britons", "Celts", "Chinese", "Mongols", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Magyars", "Slavs", "Ethiopians", "Burmese", "Malay", "Vietnamese", "Bulgarians", "Cumans"],
            highestTier: {
                entityName: "Hand Cannoneer",
                unitLevel: 1,
                civs: ["Byzantines", "Franks", "Goths", "Japanese", "Persians", "Saracens", "Teutons", "Turks", "Koreans", "Spanish", "Indians", "Italians", "Berbers", "Malians", "Portuguese", "Khmer", "Lithuanians", "Tatars"]
            },
        }
    },
    stable: {
        lightCavalryLine: {
            unavailable: ["Aztecs", "Mayans", "Incas"],
            lowestTier: {
                entityName: "Scout Cavalry",
                unitLevel: 1,
                civs: ["Teutons"]
            },
            secondTier: {
                entityName: "Light Cavalry",
                unitLevel: 2,
                civs: ["Britons", "Chinese", "Franks", "Japanese", "Vikings", "Malians", "Portuguese", "Khmer", "Malay", "Vietnamese"]
            },
            highestTier: {
                entityName: "Hussar",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Goths", "Mongols", "Persians", "Saracens", "Turks", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Burmese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        heavyCavalryLine: {
            unavailable: ["Aztecs", "Mayans", "Incas", "Indians"],
            lowestTier: {
                entityName: "Knight",
                unitLevel: 1,
                civs: ["Saracens"]
            },
            secondTier: {
                entityName: "Cavalier",
                unitLevel: 2,
                civs: ["Britons", "Chinese", "Goths", "Japanese", "Mongols", "Turks", "Vikings", "Koreans", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars"]
            },
            highestTier: {
                entityName: "Paladin",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Franks", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"]
            }
        },
        camelRiderLine: {
            unavailable: ["Britons", "Celts", "Franks", "Goths", "Japanese", "Teutons", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Magyars", "Slavs", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"],
            lowestTier: {
                entityName: "Camel Rider",
                unitLevel: 1,
                civs: ["Cumans"]
            },
            highestTier: {
                entityName: "Heavy Camel Rider",
                unitLevel: 2,
                civs: ["Byzantines", "Chinese", "Mongols", "Persians", "Saracens", "Turks", "Berbers", "Ethiopians", "Malians", "Tatars"]
            },
            specialTier: {
                entityName: "Imperial Camel",
                unitLevel: 3,
                civs: ["Indians"]
            },
        },
        battleElephantLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"],
            lowestTier: {
                entityName: "Battle Elephant",
                unitLevel: 1,
                civs: []
            },
            highestTier: {
                entityName: "Elite Battle Elephant",
                unitLevel: 2,
                civs: ["Burmese", "Khmer", "Malay", "Vietnamese"]
            }
        },
        steppeLancerLine: {
            unavailable: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"],
            lowestTier: {
                entityName: "Steppe Lancer",
                unitLevel: 1,
                civs: []
            },
            highestTier: {
                entityName: "Elite Steppe Lancer",
                unitLevel: 2,
                civs: ["Mongols", "Cumans", "Tatars"]
            }
        }
    },
    siegeWorkshop: {
        ramLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Battering Ram",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Capped Ram",
                unitLevel: 2,
                civs: ["Britons", "Franks", "Goths", "Japanese", "Teutons", "Koreans", "Indians", "Italians", "Magyars", "Berbers", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Lithuanians"]
            },
            highestTier: {
                entityName: "Siege Ram",
                unitLevel: 3,
                civs: ["Byzantines", "Celts", "Chinese", "Mongols", "Persians", "Saracens", "Turks", "Vikings", "Aztecs", "Huns", "Mayans", "Spanish", "Incas", "Slavs", "Ethiopians", "Khmer", "Bulgarians", "Cumans", "Tatars"]
            }
        },
        catapultLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Mangonel",
                unitLevel: 1,
                civs: ["Turks", "Huns"]
            },
            secondTier: {
                entityName: "Onager",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Chinese", "Franks", "Goths", "Japanese", "Persians", "Vikings", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Berbers", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            },
            highestTier: {
                entityName: "Siege Onager",
                unitLevel: 3,
                civs: ["Celts", "Mongols", "Saracens", "Teutons", "Aztecs", "Koreans", "Slavs", "Ethiopians", "Malians", "Bulgarians", "Cumans"]
            }
        },
        scorpionLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Scorpion",
                unitLevel: 1,
                civs: ["Byzantines", "Saracens", "Aztecs", "Huns", "Koreans", "Spanish", "Indians", "Italians", "Malians", "Portuguese", "Vietnamese", "Cumans", "Lithuanians"]
            },
            highestTier: {
                entityName: "Heavy Scorpion",
                unitLevel: 2,
                civs: ["Britons", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Turks", "Vikings", "Mayans", "Incas", "Magyars", "Slavs", "Berbers", "Ethiopians", "Burmese", "Khmer", "Malay", "Bulgarians", "Tatars"]
            }
        },
        bombardCannonLine: {
            unavailable: ["Britons", "Celts", "Chinese", "Japanese", "Mongols", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Magyars", "Slavs", "Khmer", "Bulgarians", "Cumans", "Tatars"],
            highestTier: {
                entityName: "Bombard Cannon",
                unitLevel: 1,
                civs: ["Byzantines", "Franks", "Goths", "Persians", "Saracens", "Teutons", "Turks", "Koreans", "Spanish", "Indians", "Italians", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Lithuanians"]
            }
        }
    },
    dock: {
        galleyLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Galley",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "War Galley",
                unitLevel: 2,
                civs: ["Aztecs", "Malians"]
            },
            highestTier: {
                entityName: "Galleon",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        fireLine: {
            unavailable: ["Vikings"],
            lowestTier: {
                entityName: "Fire Galley",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Fire Ship",
                unitLevel: 2,
                civs: ["Celts", "Chinese", "Saracens", "Turks", "Huns", "Indians", "Ethiopians", "Portuguese", "Burmese", "Vietnamese", "Bulgarians"]
            },
            highestTier: {
                entityName: "Fast Fire Ship",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Teutons", "Aztecs", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Magyars", "Slavs", "Berbers", "Malians", "Khmer", "Malay", "Cumans", "Lithuanians", "Tatars"]
            }
        },
        demoLine: {
            unavailable: ["Koreans"],
            lowestTier: {
                entityName: "Demolition Raft",
                unitLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Demolition Ship",
                unitLevel: 2,
                civs: ["Japanese", "Aztecs", "Incas", "Italians", "Magyars", "Slavs", "Ethiopians", "Burmese", "Khmer", "Malay", "Bulgarians", "Cumans", "Lithuanians", "Tatars"]
            },
            highestTier: {
                entityName: "Heavy Demolition Ship",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Huns", "Mayans", "Spanish", "Indians", "Berbers", "Malians", "Portuguese", "Vietnamese"]
            }
        },
        cannonGalleonLine: {
            unavailable: ["Aztecs", "Huns", "Mayans", "Incas", "Cumans"],
            lowestTier: {
                entityName: "Cannon Galleon",
                unitLevel: 1,
                civs: ["Britons", "Celts", "Chinese", "Franks", "Goths", "Mongols", "Teutons", "Koreans", "Magyars", "Slavs", "Ethiopians", "Malians", "Bulgarians"]
            },
            highestTier: {
                entityName: "Elite Cannon Galleon",
                unitLevel: 2,
                civs: ["Byzantines", "Japanese", "Persians", "Saracens", "Turks", "Vikings", "Spanish", "Indians", "Italians", "Berbers", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            }
        }
    },
    defensiveStructures: {
        towerLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Watch Tower",
                unitLevel: 1,
                civs: ["Goths", "Huns", "Cumans"]
            },
            secondTier: {
                entityName: "Guard Tower",
                unitLevel: 2,
                civs: ["Franks", "Mongols", "Persians", "Vikings", "Aztecs", "Indians", "Magyars", "Slavs", "Berbers", "Tatars"]
            },
            highestTier: {
                entityName: "Keep",
                unitLevel: 3,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Japanese", "Saracens", "Teutons", "Turks", "Koreans", "Mayans", "Spanish", "Incas", "Italians", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Lithuanians"]
            }
        },
        stoneWallLine: {
            unavailable: ["Goths", "Cumans"],
            lowestTier: {
                entityName: "Stone Wall",
                unitLevel: 1,
                civs: ["Persians", "Huns", "Magyars", "Malay", "Bulgarians"]
            },
            highestTier: {
                entityName: "Fortified Wall",
                unitLevel: 2,
                civs: ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Japanese", "Mongols", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Vietnamese", "Lithuanians", "Tatars"]
            }
        },
        bombardTowerLine: {
            unavailable: ["Britons", "Celts", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Vikings", "Aztecs", "Huns", "Mayans", "Incas", "Indians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Burmese", "Khmer", "Bulgarians", "Cumans"],
            highestTier: {
                entityName: "Bombard Tower",
                unitLevel: 1,
                civs: ["Byzantines", "Chinese", "Teutons", "Turks", "Koreans", "Spanish", "Italians", "Portuguese", "Malay", "Vietnamese", "Lithuanians", "Tatars"]
            }
        }
    },
    monastery: {
        monkLine: {
            unavailable: [],
            lowestTier: {
                entityName: "Monk lv 1",
                unitLevel: 1,
                civs: ["Britons", "Celts", "Chinese", "Goths", "Persians", "Koreans", "Vietnamese", "Tatars"],
                description: "Mediocre Monastery"
            },
            fourthTier: {
                entityName: "Monk lv 2",
                unitLevel: 2,
                civs: ["Franks", "Mongols", "Vikings", "Huns", "Mayans", "Magyars", "Ethiopians", "Cumans"],
                description: "Can research Heresy"
            },
            thirdTier: {
                entityName: "Monk lv 3",
                unitLevel: 3,
                civs: ["Japanese", "Indians", "Italians", "Slavs", "Burmese", "Khmer", "Bulgarians"],
                description: "Can research Redemption"
            },
            secondTier: {
                entityName: "Monk lv 4",
                unitLevel: 4,
                civs: ["Byzantines", "Turks", "Incas", "Berbers", "Malians", "Portuguese", "Malay"],
                description: "Can research Heresy and Redemption"
            },
            highestTier: {
                entityName: "Monk lv 5",
                unitLevel: 5,
                civs: ["Saracens", "Teutons", "Aztecs", "Spanish", "Lithuanians"],
                description: "Monastery Full Tech Tree"
            },
        }
    }
};

let unitsArray = [
    {
        entityName: "Long Swordsman",
        value: 40,
        unitClass: "infantryLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Two-Handed Swordsman",
        value: 80,
        unitClass: "infantryLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Champion",
        value: 110,
        unitClass: "infantryLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Spearman",
        value: 30,
        unitClass: "spearLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Pikeman",
        value: 52,
        unitClass: "spearLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Halberdier",
        value: 77,
        unitClass: "spearLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Eagle Scout",
        value: 1,
        unitClass: "eagleLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Eagle Warrior",
        value: 1,
        unitClass: "eagleLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Elite Eagle Warrior",
        value: 1,
        unitClass: "eagleLine",
        armorClass: "infantryArmorClass",
        attackClass: "meleAttackClass"
    },
    {
        entityName: "Archer",
        value: 50,
        unitClass: "footArcherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Crossbowman",
        value: 100,
        unitClass: "footArcherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Arbalester",
        value: 130,
        unitClass: "footArcherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Skirmisher",
        value: 1,
        unitClass: "skirmisherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Elite Skirmisher",
        value: 1,
        unitClass: "skirmisherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Imperial Skirmisher",
        value: 1,
        unitClass: "skirmisherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Cavalry Archer",
        value: 1,
        unitClass: "horseArcherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Heavy Cavalry Archer",
        value: 1,
        unitClass: "horseArcherLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    },
    {
        entityName: "Hand Cannoneer",
        value: 1,
        unitClass: "gunLine",
        armorClass: "archerArmorClass",
        attackClass: "arrowAttackClass"
    }
]

let upgradesTechTree = {
    blacksmith: {
        archerArmor: {
            unavailable: [],
            lowestTier: {
                entityName: "Padded Archer Armor",
                upgradeLevel: 1,
                civs: ["Burmese"],

            },
            secondTier: {
                entityName: "Leather Archer Armor",
                upgradeLevel: 2,
                civs: ["Aztecs", "Bulgarians", "Celts", "Franks", "Huns", "Mongols"]
            },
            highestTier: {
                entityName: "Ring Archer Armor",
                upgradeLevel: 3,
                civs: ["Berbers", "Britons", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Goths", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        range: {
            unavailable: [],
            lowestTier: {
                entityName: "Fletching",
                upgradeLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Bodkin Arrow",
                upgradeLevel: 2,
                civs: ["Celts", "Cumans", "Franks", "Malians", "Persians", "Slavs", "Teutons"]
            },
            highestTier: {
                entityName: "Bracer",
                upgradeLevel: 3,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Ethiopians", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Mayans", "Mongols", "Portuguese", "Saracens", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        rangedAttack: {
            unavailable: [],
            lowestTier: {
                entityName: "Fletching",
                upgradeLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Bodkin Arrow",
                upgradeLevel: 2,
                civs: ["Celts", "Cumans", "Franks", "Malians", "Persians", "Slavs", "Teutons"]
            },
            highestTier: {
                entityName: "Bracer",
                upgradeLevel: 3,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Ethiopians", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Mayans", "Mongols", "Portuguese", "Saracens", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        meleAttack: {
            unavailable: [],
            lowestTier: {
                entityName: "Forging",
                upgradeLevel: 1,
                civs: []
            },
            secondTier: {
                entityName: "Iron Casting",
                upgradeLevel: 2,
                civs: ["Byzantines", "Koreans", "Malians", "Vietnamese"]
            },
            highestTier: {
                entityName: "Blast Furnance",
                upgradeLevel: 3,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Lithuanians", "Magyars", "Malay", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vikings"]
            }
        },
        cavalryArmor: {
            unavailable: ["Aztecs", "Incas", "Mayans"],
            lowestTier: {
                entityName: "Scale Barding Armor",
                upgradeLevel: 1,
                civs: ["Malay"]
            },
            secondTier: {
                entityName: "Chain Barding Armor",
                upgradeLevel: 2,
                civs: ["Celts", "Ethiopians", "Goths", "Indians", "Japanese", "Koreans", "Mongols", "Vikings"]
            },
            highestTier: {
                entityName: "Plate Barding Armor",
                upgradeLevel: 3,
                civs: ["Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Cumans", "Franks", "Huns", "Italians", "Khmer", "Lithuanians", "Magyars", "Malians", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese"]
            }
        },
        infantryArmor: {
            unavailable: [],
            lowestTier: {
                entityName: "Scale Mail Armor",
                upgradeLevel: 1,
                civs: ["Tatars"]
            },
            secondTier: {
                entityName: "Chain Mail Armor",
                upgradeLevel: 2,
                civs: ["Goths", "Huns", "Indians", "Khmer", "Lithuanians", "Magyars"]
            },
            highestTier: {
                entityName: "Plate Mail Armor",
                upgradeLevel: 3,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Incas", "Italians", "Japanese", "Koreans", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        }
    },
    university: {
        buildingArmor: {
            unavailable: ["Aztecs", "Byzantines", "Vietnamese"],
            lowestTier: {
                entityName: "Masonry",
                upgradeLevel: 1,
                civs: ["Berbers", "Celts", "Cumans", "Huns", "Incas", "Indians", "Japanese", "Magyars", "Malay", "Mongols", "Saracens", "Slavs", "Tatars", "Teutons"]
            },
            highestTier: {
                entityName: "Architecture",
                upgradeLevel: 2,
                civs: ["Britons", "Bulgarians", "Burmese", "Chinese", "Ethiopians", "Franks", "Goths", "Italians", "Khmer", "Koreans", "Lithuanians", "Malians", "Mayans", "Persians", "Portuguese", "Spanish", "Turks", "Vikings"]
            }
        },
        buildingHealth: {
            unavailable: ["Aztecs", "Byzantines", "Vietnamese"],
            lowestTier: {
                entityName: "Masonry",
                upgradeLevel: 1,
                civs: ["Berbers", "Celts", "Cumans", "Huns", "Incas", "Indians", "Japanese", "Magyars", "Malay", "Mongols", "Saracens", "Slavs", "Tatars", "Teutons"]
            },
            highestTier: {
                entityName: "Architecture",
                upgradeLevel: 2,
                civs: ["Britons", "Bulgarians", "Burmese", "Chinese", "Ethiopians", "Franks", "Goths", "Italians", "Khmer", "Koreans", "Lithuanians", "Malians", "Mayans", "Persians", "Portuguese", "Spanish", "Turks", "Vikings"]
            }
        },
        accuracy: {
            unavailable: [],
            highestTier: {
                entityName: "Ballistics",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        antiShipAttack: {
            unavailable: ["Byzantines", "Franks", "Huns", "Japanese", "Mongols", "Saracens", "Slavs", "Spanish"],
            highestTier: {
                entityName: "Heated Shot",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Celts", "Chinese", "Cumans", "Ethiopians", "Goths", "Incas", "Indians", "Italians", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        buildingMinimumRange: {
            unavailable: [],
            highestTier: {
                entityName: "Murder Holes",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        buildingConstructionSpeed: {
            unavailable: ["Britons", "Bulgarians", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Goths", "Huns", "Indians", "Malay", "Mongols", "Persians", "Spanish"],
            highestTier: {
                entityName: "Treadmill Crane",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Burmese", "Celts", "Franks", "Incas", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malians", "Mayans", "Portuguese", "Saracens", "Slavs", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        rangedAttack: {
            unavailable: [],
            highestTier: {
                entityName: "Chemistry",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        siegeRange: {
            unavailable: ["Byzantines", "Chinese", "Cumans", "Goths", "Huns", "Italians", "Lithuanians", "Malians", "Mayans", "Persians", "Spanish", "Turks"],
            highestTier: {
                entityName: "Siege Engineers",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Celts", "Ethiopians", "Franks", "Incas", "Indians", "Japanese", "Khmer", "Koreans", "Magyars", "Malay", "Mongols", "Portuguese", "Saracens", "Slavs", "Tatars", "Teutons", "Vietnamese", "Vikings"]
            }
        },
        siegeAttack: {
            unavailable: ["Byzantines", "Chinese", "Cumans", "Goths", "Huns", "Italians", "Lithuanians", "Malians", "Mayans", "Persians", "Spanish", "Turks"],
            highestTier: {
                entityName: "Siege Engineers",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Celts", "Ethiopians", "Franks", "Incas", "Indians", "Japanese", "Khmer", "Koreans", "Magyars", "Malay", "Mongols", "Portuguese", "Saracens", "Slavs", "Tatars", "Teutons", "Vietnamese", "Vikings"]
            }
        },
        towerDamage: {
            unavailable: [],
            highestTier: {
                entityName: "Arrowslits",
                upgradeLevel: 1,
                civs: []
            }
        }
    },
    archeryRange: {
        rateOfFire: {
            unavailable: ["Aztecs", "Britons", "Burmese", "Celts", "Franks", "Goths", "Khmer", "Slavs", "Teutons"],
            highestTier: {
                entityName: "Thumb Ring",
                upgradeLevel: 1,
                civs: ["Berbers", "Bulgarians", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Huns", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        accuracy: {
            unavailable: ["Aztecs", "Britons", "Burmese", "Celts", "Franks", "Goths", "Khmer", "Slavs", "Teutons"],
            highestTier: {
                entityName: "Thumb Ring",
                upgradeLevel: 1,
                civs: ["Berbers", "Bulgarians", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Huns", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        cavalryArcherAttack: {
            unavailable: ["Aztecs", "Berbers", "Britons", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Goths", "Incas", "Italians", "Koreans", "Lithuanians", "Malay", "Malians", "Mayans", "Portuguese", "Slavs", "Spanish", "Teutons", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Parthian Tactics",
                upgradeLevel: 1,
                civs: ["Bulgarians", "Burmese", "Cumans", "Huns", "Indians", "Japanese", "Khmer", "Magyars", "Mongols", "Persians", "Saracens", "Tatars", "Turks"]
            }
        },
        cavalryArcherArmor: {
            unavailable: ["Aztecs", "Berbers", "Britons", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Goths", "Incas", "Italians", "Koreans", "Lithuanians", "Malay", "Malians", "Mayans", "Portuguese", "Slavs", "Spanish", "Teutons", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Parthian Tactics",
                upgradeLevel: 1,
                civs: ["Bulgarians", "Burmese", "Cumans", "Huns", "Indians", "Japanese", "Khmer", "Magyars", "Mongols", "Persians", "Saracens", "Tatars", "Turks"]
            }
        }
    }
}

let classUpgradesObject = {
    infantryLine: [],
    spearLine: [],
    eagleLine: [],
    footArcherLine: ["rangedAttack", "range", "rateOfFire", "accuracy", "archerArmor", "conversionDefense", "creationSpeed", "footArcherAttackAgainstBuildings", "footArcherRange", "footArcherArmor", "footArcherLineCostReduction", "archeryRangeWorktime"],
    skirmisherLine: [],
    horseArcherLine: [],
    gunLine: [],
    lightCavalryLine: [],
    heavyCavalryLine: [],
    camelRiderLine: [],
    battleElephantLine: [],
    steppeLancerLine: [],
    ramLine: [],
    catapultLine: [],
    scorpionLine: [],
    bombardCannonLine: [],
    galleyLine: [],
    fireLine: [],
    demoLine: [],
    cannonGalleonLine: [],
    towerLine: [],
    stoneWallLine: [],
    bombardTowerLine: [],
    monkLine: []
}

let upgradesArray = [
    {
        entityName: "Padded Archer Armor",
        value: 10
    },
    {
        entityName: "Leather Archer Armor",
        value: 10
    },
    {
        entityName: "Ring Archer Armor",
        value: 10
    },
    {
        entityName: "Fletching",
        value: 10
    },
    {
        entityName: "Bodkin Arrow",
        value: 10
    },
    {
        entityName: "Bracer",
        value: 10
    },
    {
        entityName: "Forging",
        value: 10
    },
    {
        entityName: "Iron Casting",
        value: 10
    },
    {
        entityName: "Blast Furnance",
        value: 10
    },
    {
        entityName: "Scale Barding Armor",
        value: 10
    },
    {
        entityName: "Chain Barding Armor",
        value: 10
    },
    {
        entityName: "Plate Barding Armor",
        value: 10
    },
    {
        entityName: "Scale Mail Armor",
        value: 10
    },
    {
        entityName: "Chain Mail Armor",
        value: 10
    },
    {
        entityName: "Plate Mail Armor",
        value: 10
    },
    {
        entityName: "Masonry",
        value: 10
    },
    {
        entityName: "Architecture",
        value: 10
    },
    {
        entityName: "Ballistics",
        value: 10
    },
    {
        entityName: "Heated Shot",
        value: 10
    },
    {
        entityName: "Murder Holes",
        value: 10
    },
    {
        entityName: "Treadmill Crane",
        value: 10
    },
    {
        entityName: "Chemistry",
        value: 10
    },
    {
        entityName: "Siege Engineers",
        value: 10
    },
    {
        entityName: "Arrowslits",
        value: 10
    },
    {
        entityName: "Thumb Ring",
        value: 10
    },
    {
        entityName: "Parthian Tactics",
        value: 10
    }
]

let uniqueFeaturesTree = {
    Aztecs: {
        uniqueUpgrades: {
            skirmisherLineRange: {
                entityName: "Atlatl",
                value: 10,
                age: 'Castle Age',
            },
            skirmisherLineAttack: {
                entityName: "Atlatl",
                value: 10,
                age: 'Castle Age',
            },
            infantryAttack: {
                entityName: "Garland Wars",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerCarryCapacityAll: {
                value: 10,
            },
            militaryUnitsCreationSpeed: {
                value: 10,
            },
            monkHealth: {
                value: 10,
            },
            extraStartingGold: {
                value: 10,
            },
        },
        teamBonuses: {
            increasedRelicGoldGeneration: {
                value: 10,
            }
        }
    },
    Berbers: {
        uniqueUpgrades: {
            castleWorktime: {
                entityName: "Kasbah",
                value: 10,
                age: 'Castle Age',
            },
            camelRiderLineRegeneration: {
                entityName: "Maghrabi Camels",
                value: 10,
                age: 'Imperial Age',
            },
            camelArcherRegeneration: {
                entityName: "Maghrabi Camels",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerSpeed: {
                value: 10,
            },
            stableUnitsCostReduction: {
                value: 10,
            },
            shipSpeed: {
                value: 10,
            },
        },
        teamBonuses: {
            genitourEnabled: {
                value: 10,
            },
        }
    },
    Britons: {
        uniqueUpgrades: {
            footArcherRange: {
                entityName: "Yeomen",
                value: 10,
                age: 'Castle Age',
            },
            skirmisherLineRange: {
                entityName: "Yeomen",
                value: 10,
                age: 'Castle Age',
            },
            towerDamage: {
                entityName: "Yeomen",
                value: 10,
                age: 'Castle Age',
            },
            trebuchetDamage: {
                entityName: "Warwolf",
                value: 10,
                age: 'Imperial Age',
            },
            trebuchetAccuracy: {
                entityName: "Warwolf",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            townCenterWoodCostReduction: {
                value: 10,
            },
            footArcherRange: {
                value: 10,
            },
            villagerHeardablesWorkRate: {
                value: 10,
            },
        },
        teamBonuses: {
            archeryRangeWorktime: {
                value: 10,
            },
        }
    },
    Bulgarians: {
        uniqueUpgrades: {
            cavalryRateOfFire: {
                entityName: "Stirrups",
                value: 10,
                age: 'Castle Age',
            },
            infantryArmor: {
                entityName: "Bagains",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freeInfantryLineUpgrade: {
                value: 10,
            },
            townCenterStoneCostReduction: {
                value: 10,
            },
            krepostEnabled: {
                value: 10,
            },
            blacksmithUpgradesFoodCostReduction: {
                value: 10,
            },
            siegeWorkshopUpgradesFoodCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            blacksmithWorktime: {
                value: 10,
            },
        }
    },
    Burmese: {
        uniqueUpgrades: {
            battleElephantArmor: {
                entityName: "Howdah",
                value: 10,
                age: 'Castle Age',
            },
            cavalryAttackAgainstBuildings: {
                entityName: "Manipur Cavalry",
                value: 10,
                age: 'Imperial Age',
            },
            arambaiAttackAgainstBuildings: {
                entityName: "Manipur Cavalry",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freeLumberCampUpgrades: {
                value: 10,
            },
            infantryAttack: {
                value: 10,
            },
            monasteryUpgradesCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            visibleRelicsAtGameStart: {
                value: 10,
            },
        }
    },
    Byzantines: {
        uniqueUpgrades: {
            fireShipRange: {
                entityName: "Greek Fire",
                value: 10,
                age: 'Castle Age',
            },
            cataphractTrampleDamage: {
                entityName: "Logistica",
                value: 10,
                age: 'Imperial Age',
            },
            cataphractAttackAgainstInfantry: {
                entityName: "Logistica",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            buildingHealth: {
                value: 10,
            },
            camelRiderLineCostReduction: {
                value: 10,
            },
            skirmisherLineCostReduction: {
                value: 10,
            },
            spearLineCostReduction: {
                value: 10,
            },
            fireShipRateOfFire: {
                value: 10,
            },
            imperialAgeCostReduction: {
                value: 10,
            },
            freeTownWatch: {
                value: 10,
            },
        },
        teamBonuses: {
            monkHealRate: {
                value: 10,
            },
        }
    },
    Celts: {
        uniqueUpgrades: {
            towerRateOfFire: {
                entityName: "Stronghold",
                value: 10,
                age: 'Castle Age',
            },
            castleRateOfFire: {
                entityName: "Stronghold",
                value: 10,
                age: 'Castle Age',
            },
            siegeHealth: {
                entityName: "Furor Celtica",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            infantryLineSpeed: {
                value: 10,
            },
            villagerWoodWorkRate: {
                value: 10,
            },
            siegeRateOfFire: {
                value: 10,
            },
            heardablesConversion: {
                value: 10,
            },
        },
        teamBonuses: {
            siegeWorkshopWorktime: {
                value: 10,
            },
        }
    },
    Chinese: {
        uniqueUpgrades: {
            stoneWallHealth: {
                entityName: "Great Wall",
                value: 10,
                age: 'Castle Age',
            },
            towerHealth: {
                entityName: "Great Wall",
                value: 10,
                age: 'Castle Age',
            },
            chukonuAttack: {
                entityName: "Rocketry",
                value: 10,
                age: 'Imperial Age',
            },
            scorpionAttack: {
                entityName: "Rocketry",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            extraStartingVillagers: {
                value: 10,
            },
            penaltyStartingFood: {
                value: 10,
            },
            penaltyStartingWood: {
                value: 10,
            },
            townCenterPopulationSpace: {
                value: 10,
            },
            townCenterLineOfSight: {
                value: 10,
            },
            upgradesCostReduction: {
                value: 10,
            },
            demoLineHealth: {
                value: 10,
            },
        },
        teamBonuses: {
            farmFood: {
                value: 10,
            },
        }
    }, 
    Cumans: {
        uniqueUpgrades: {
            scoutCavalryLineProductionSpeed: {
                entityName: "Steppe Husbandry",
                value: 10,
                age: 'Castle Age',
            },
            steppeLancerLineProductionSpeed: {
                entityName: "Steppe Husbandry",
                value: 10,
                age: 'Castle Age',
            },
            cavalryArcherLineProductionSpeed: {
                entityName: "Steppe Husbandry",
                value: 10,
                age: 'Castle Age',
            },
            freeKipchaksForTeam: {
                entityName: "Cuman Mercenaries",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            townCenterFeudalAge: {
                value: 10,
            },
            siegeWorkshopFeudalAge: {
                value: 10,
            },
            batteringRamFeudalAge: {
                value: 10,
            },
            cappedRamFeudalAge: {
                value: 10,
            },
            cavalrySpeed: {
                value: 10,
            },
        },
        teamBonuses: {
            palisadeWallHealth: {
                value: 10,
            },
        }
    },
    Ethiopians: {
        uniqueUpgrades: {
            shotelWarriorProductionSpeed: {
                entityName: "Royal Heirs",
                value: 10,
                age: 'Castle Age',
            },
            siegeAttack: {
                entityName: "Torsion Engines",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            footArcherRateOfFire: {
                value: 10,
            },
            extraAgeAdvancedGold: {
                value: 10,
            },
            extraAgeAdvancedFood: {
                value: 10,
            },
            freePikemanUpgrade: {
                value: 10,
            },
        },
        teamBonuses: {
            towerLineOfSight: {
                value: 10,
            },
            outpostLineOfSight: {
                value: 10,
            },
        }
    },
    Franks: {
        uniqueUpgrades: {
            stableWorktime: {
                entityName: "Chivalry",
                value: 10,
                age: 'Castle Age',
            },
            throwingAxemanRange: {
                entityName: "Bearded Axe",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freeMillUpgrades: {
                value: 10,
            },
            castleCostReduction: {
                value: 10,
            },
            cavalryArcherLineHealth: {
                value: 10,
            },
            lightCavalryLineHealth: {
                value: 10,
            },
            heavyCavalryLineHealth: {
                value: 10,
            },
            villagerForagersWorkRate: {
                value: 10,
            },
        },
        teamBonuses: {
            heavyCavalryLineLineOfSight: {
                value: 10,
            },
        }
    },
    Goths: {
        uniqueUpgrades: {
            huskarlsAvailableAtBarracks: {
                entityName: "Anarchy",
                value: 10,
                age: 'Castle Age',
            },
            barracksWorktime: {
                entityName: "Perfusion",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            infantryLineCostReduction: {
                value: 10,
            },
            infantryAttackAgainstBuildings: {
                value: 10,
            },
            villagerHuntingBonus: {
                value: 10,
            },
            populationCapIncreased: {
                value: 10,
            },
            loomResearchTime: {
                value: 10,
            },
        },
        teamBonuses: {
            barracksWorktime: {
                value: 10,
            },
        }
    },
    Huns: {
        uniqueUpgrades: {
            tarkansAvailableAtStables: {
                entityName: "Marauders",
                value: 10,
                age: 'Castle Age',
            },
            relicWonderTimer: {
                entityName: "Atheism",
                value: 10,
                age: 'Imperial Age',
            },
            spiesCost: {
                entityName: "Atheism",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freePopulationSpace: {
                value: 10,
            },
            penaltyStartingWood: {
                value: 10,
            },
            cavalryArcherLineCostReduction: {
                value: 10,
            },
            trebuchetAccuracy: {
                value: 10,
            },
        },
        teamBonuses: {
            stableWorktime: {
                value: 10,
            },
        }
    },
    Incas: {
        uniqueUpgrades: {
            skirmisherLineMinimumRange: {
                entityName: "Andean Sling",
                value: 10,
                age: 'Castle Age',
            },
            slingerMinimumRange: {
                entityName: "Andean Sling",
                value: 10,
                age: 'Castle Age',
            },
            kamayukArmor: {
                entityName: "Fabric Shields",
                value: 10,
                age: 'Imperial Age',
            },
            slingerArmor: {
                entityName: "Fabric Shields",
                value: 10,
                age: 'Imperial Age',
            },
            eagleLineArmor: {
                entityName: "Fabric Shields",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freeLamaAtGameStart: {
                value: 10,
            },
            villagerArmor: {
                value: 10,
            },
            villagerAttack: {
                value: 10,
            },
            housePopulationSpace: {
                value: 10,
            },
            buildingStoneCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            farmBuildTime: {
                value: 10,
            },
        }
    },
    Indians: {
        uniqueUpgrades: {
            increasedGoldGeneration: {
                entityName: "Sultans",
                value: 10,
                age: 'Castle Age',
            },
            gunLineRange: {
                entityName: "Shatagni",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerFishingWorkRate: {
                value: 10,
            },
            villagerCostReduction: {
                value: 10,
            },
            lightCavalryLineArmor: {
                value: 10,
            },
            camelRiderLineArmor: {
                value: 10,
            },
        },
        teamBonuses: {
            camelRiderLineAttackAgainstBuildings: {
                value: 10,
            },
        }
    },
    Italians: {
        uniqueUpgrades: {
            footArcherArmor: {
                entityName: "Pavise",
                value: 10,
                age: 'Castle Age',
            },
            tradeUnitsCostReduction: {
                entityName: "Silk Road",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            dockTechnologiesCostReduction: {
                value: 10,
            },
            fishingShipCostReduction: {
                value: 10,
            },
            gunLineCostReduction: {
                value: 10,
            },
            bombardCannonLineCostReduction: {
                value: 10,
            },
            cannonGalleonLineCostReduction: {
                value: 10,
            },
            feudalAgeCostReduction: {
                value: 10,
            },
            castleAgeCostReduction: {
                value: 10,
            },
            imperialAgeCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            condottieroEnabled: {
                value: 10,
            },
        }
    },
    Japanese: {
        uniqueUpgrades: {
            towerDamage: {
                entityName: "Yasama",
                value: 10,
                age: 'Castle Age',
            },
            trebuchetRateOfFire: {
                entityName: "Kataparuto",
                value: 10,
                age: 'Imperial Age',
            },
            trebuchetPackUnpackTime: {
                entityName: "Kataparuto",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            fishingShipHealth: {
                value: 10,
            },
            fishingShipArmor: {
                value: 10,
            },
            fishingShipWorkRate: {
                value: 10,
            },
            millCostReduction: {
                value: 10,
            },
            lumberCampCostReduction: {
                value: 10,
            },
            miningCampCostReduction: {
                value: 10,
            },
            infantryRateOfFire: {
                value: 10,
            },
        },
        teamBonuses: {
            galleyLineLineOfSight: {
                value: 10,
            },
        }
    },
    Khmer: {
        uniqueUpgrades: {
            battleElephantAttack: {
                entityName: "Tusk Swords",
                value: 10,
                age: 'Castle Age',
            },
            ballistaElephantAttack: {
                entityName: "Double Crossbow",
                value: 10,
                age: 'Imperial Age',
            },
            scorpionAttack: {
                entityName: "Double Crossbow",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            disabledBuildingPrerequirements: {
                value: 10,
            },
            disabledAgeAdvancePrerequirements: {
                value: 10,
            },
            battleElephantLineSpeed: {
                value: 10,
            },
            villagerFarmingWorkRate: {
                value: 10,
            },
            villagerGarrisonInHouse: {
                value: 10,
            },
        },
        teamBonuses: {
            scorpionRange: {
                value: 10,
            },
        }
    },
    Koreans: {
        uniqueUpgrades: {
            towerRange: {
                entityName: "Eupseong",
                value: 10,
                age: 'Castle Age',
            },
            catapultLineRange: {
                entityName: "Shinkichon",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerLineOfSight: {
                value: 10,
            },
            villagerStoneWorkRate: {
                value: 10,
            },
            freeGuardTowerUpgrade: {
                value: 10,
            },
            freeKeepUpgrade: {
                value: 10,
            },
            freeBombardTowerUpgrade: {
                value: 10,
            },
            freeBlacksmithArcherArmorUpgrades: {
                value: 10,
            },
            spearLineWoodCostReduction: {
                value: 10,
            },
            footArcherLineWoodCostReduction: {
                value: 10,
            },
            skirmisherLineWoodCostReduction: {
                value: 10,
            },
            cavalryArcherLineWoodCostReduction: {
                value: 10,
            },
            warWagonWoodCostReduction: {
                value: 10,
            },
            fireLineWoodCostReduction: {
                value: 10,
            },
            galleyLineWoodCostReduction: {
                value: 10,
            },
            cannonGalleonLineWoodCostReduction: {
                value: 10,
            },
            turtleShipWoodCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            catapultLineMinimumRange: {
                value: 10,
            },
        }
    },
    Lithuanians: {
        uniqueUpgrades: {
            townCenterRange: {
                entityName: "Hill Forts",
                value: 10,
                age: 'Castle Age',
            },
            spearLineArmor: {
                entityName: "Tower Shields",
                value: 10,
                age: 'Imperial Age',
            },
            skirmisherLineArmor: {
                entityName: "Tower Shields",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            extraStartingFood: {
                value: 10,
            },
            spearLineSpeed: {
                value: 10,
            },
            skirmisherLineSpeed: {
                value: 10,
            },
            heavyCavalryLineAttack: {
                value: 10,
            },
            leitisAttack: {
                value: 10,
            },
        },
        teamBonuses: {
            monasteryWorkTime: {
                value: 10,
            },
        }
    },
    Magyars: {
        uniqueUpgrades: {
            magyarHuszarGoldCost: {
                entityName: "Corvinian Army",
                value: 10,
                age: 'Castle Age',
            },
            cavalryArcherAttack: {
                entityName: "Recurve Bow",
                value: 10,
                age: 'Imperial Age',
            },
            cavalryArcherRange: {
                entityName: "Recurve Bow",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            freeBlacksmithMeleAttackUpgrades: {
                value: 10,
            },
            lightCavalryLineCostReduction: {
                value: 10,
            },
            villagerAttackAgainstWildAnimals: {
                value: 10,
            },
        },
        teamBonuses: {
            footArcherLineLineOfSight: {
                value: 10,
            },
        }
    },
    Malay: {
        uniqueUpgrades: {
            enablesHarbors: {
                entityName: "Thalassocracy",
                value: 10,
                age: 'Castle Age',
            },
            infantryLineGoldCost: {
                entityName: "Forced Levy",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            ageAdvanceTime: {
                value: 10,
            },
            fishTrapsCostReduction: {
                value: 10,
            },
            fishTrapsFood: {
                value: 10,
            },
            battleElephantLineCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            dockLineOfSight: {
                value: 10,
            },
        }
    },
    Malians: {
        uniqueUpgrades: {
            townCenterAttack: {
                entityName: "Tigui",
                value: 10,
                age: 'Castle Age',
            },
            camelRiderLineAttack: {
                entityName: "Farimba",
                value: 10,
                age: 'Imperial Age',
            },
            heavyCavalryLineAttack: {
                entityName: "Farimba",
                value: 10,
                age: 'Imperial Age',
            },
            lightCavalryLineAttack: {
                entityName: "Farimba",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            buildingsExceptFarmsCostReduction: {
                value: 10,
            },
            infantryArmor: {
                value: 10,
            },
            spearLineArmor: {
                value: 10,
            },
            freeGoldMiningUpgrade: {
                value: 10,
            },
        },
        teamBonuses: {
            universityWorkTime: {
                value: 10,
            },
        }
    },
    Mayans: {
        uniqueUpgrades: {
            footArcherAttackAgainstBuildings: {
                entityName: "Obsidian Arrows",
                value: 10,
                age: 'Castle Age',
            },
            eagleLineHealth: {
                entityName: "El Dorado",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            extraStartingVillagers: {
                value: 10,
            },
            penaltyStartingFood: {
                value: 10,
            },
            resourcesAddedValue: {
                value: 10,
            },
            footArcherLineCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            stoneWallCostReduction: {
                value: 10,
            },
        }
    },
    Mongols: {
        uniqueUpgrades: {
            destroyedHouseRetainPopulationSpace: {
                entityName: "Nomads",
                value: 10,
                age: 'Castle Age',
            },
            siegeSpeed: {
                entityName: "Drill",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            cavalryArcherRateOfFire: {
                value: 10,
            },
            lightCavalryLineHealth: {
                value: 10,
            },
            villagerHuntingWorkRate: {
                value: 10,
            },
            stoneWallCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            lightCavalryLineLineOfSight: {
                value: 10,
            },
        }
    },
    Persians: {
        uniqueUpgrades: {
            footArcherGoldCost: {
                entityName: "Kamandaran",
                value: 10,
                age: 'Castle Age',
            },
            warElephantSpeed: {
                entityName: "Mahouts",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            extraStartingFood: {
                value: 10,
            },
            extraStartingWood: {
                value: 10,
            },
            townCenterHealth: {
                value: 10,
            },
            townCenterWorkTime: {
                value: 10,
            },
            dockHealth: {
                value: 10,
            },
            dockWorkTime: {
                value: 10,
            },
        },
        teamBonuses: {
            heavyCavalryLineAttackAgainstArchers: {
                value: 10,
            },
        }
    },
    Portuguese: {
        uniqueUpgrades: {
            shipArmor: {
                entityName: "Carrack",
                value: 10,
                age: 'Castle Age',
            },
            gunLineAccuracy: {
                entityName: "Arquebus",
                value: 10,
                age: 'Imperial Age',
            },
            bombardCannonLineAccuracy: {
                entityName: "Arquebus",
                value: 10,
                age: 'Imperial Age',
            },
            cannonGalleonLineAccuracy: {
                entityName: "Arquebus",
                value: 10,
                age: 'Imperial Age',
            },
            organGunAccuracy: {
                entityName: "Arquebus",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            allUnitsGoldCostReduction: {
                value: 10,
            },
            allShipsHealth: {
                value: 10,
            },
            feitoriaEnabled: {
                value: 10,
            },
            allTechnologiesExceptAgeAdvanceTime: {
                value: 10,
            },
        },
        teamBonuses: {
            freeCartography: {
                value: 10,
            },
        }
    },
    Saracens: {
        uniqueUpgrades: {
            monkReturnGoldPercent: {
                entityName: "Madrasah",
                value: 10,
                age: 'Castle Age',
            },
            camelRiderLineHealth: {
                entityName: "Zealotry",
                value: 10,
                age: 'Imperial Age',
            },
            mamelukeHealth: {
                entityName: "Zealotry",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            commodityTradeFeeReduction: {
                value: 10,
            },
            marketWoodCostReduction: {
                value: 10,
            },
            transportShipHealth: {
                value: 10,
            },
            transportShipCarryCapacity: {
                value: 10,
            },
            galleyLineRateOfFire: {
                value: 10,
            },
            footArcherAttackAgainstBuildings: {
                value: 10,
            },
            cavalryArcherAttackAgainstBuildings: {
                value: 10,
            },
        },
        teamBonuses: {
            footArcherAttackAgainstBuildings: {
                value: 10,
            },
        }
    },
    Slavs: {
        uniqueUpgrades: {
            monkArmor: {
                entityName: "Orthodoxy",
                value: 10,
                age: 'Castle Age',
            },
            infantryAttack: {
                entityName: "Druzhina",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerFarmingWorkRate: {
                value: 10,
            },
            freeSuppliesUpgrade: {
                value: 10,
            },
            ramLineCostReduction: {
                value: 10,
            },
            catapultLineCostReduction: {
                value: 10,
            },
            scorpionLineCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            barrackPopulationSpace: {
                value: 10,
            },
            archeryRangePopulationSpace: {
                value: 10,
            },
            stablePopulationSpace: {
                value: 10,
            },
            siegeWorkshopPopulationSpace: {
                value: 10,
            },
        }
    },
    Spanish: {
        uniqueUpgrades: {
            conversionSpeed: {
                entityName: "Inquisition",
                value: 10,
                age: 'Castle Age',
            },
            villagerAttack: {
                entityName: "Supremacy",
                value: 10,
                age: 'Imperial Age',
            },
            villagerArmor: {
                entityName: "Supremacy",
                value: 10,
                age: 'Imperial Age',
            },
            villagerHealth: {
                entityName: "Supremacy",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            villagerBuilderWorkRate: {
                value: 10,
            },
            blacksmithUpgradesGoldCostReduction: {
                value: 10,
            },
            cannonGalleonLineAccuracy: {
                value: 10,
            },
            cannonGalleonLineRateOfFire: {
                value: 10,
            },
            gunLineRateOfFire: {
                value: 10,
            },
            bombardCannonLineRateOfFire: {
                value: 10,
            },
        },
        teamBonuses: {
            tradeUnitGoldGeneration: {
                value: 10,
            },
        }
    },
    Tatars: {
        uniqueUpgrades: {
            scoutCavalryLineArmor: {
                entityName: "Silk Armor",
                value: 10,
                age: 'Castle Age',
            },
            cavalryArcherArmor: {
                entityName: "Silk Armor",
                value: 10,
                age: 'Castle Age',
            },
            trebuchetRange: {
                entityName: "Timurid Siegecraft",
                value: 10,
                age: 'Imperial Age',
            },
            flamingCamelEnabled: {
                entityName: "Timurid Siegecraft",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            heardablesFood: {
                value: 10,
            },
            elevationAttack: {
                value: 10,
            },
            freeParthianTacticsUpgrade: {
                value: 10,
            },
            freeThumbRingUpgrade: {
                value: 10,
            },
            extraSheep: {
                value: 10,
            },
        },
        teamBonuses: {
            cavalryArcherLineLineOfSight: {
                value: 10,
            },
        }
    },
    Teutons: {
        uniqueUpgrades: {
            siegeArmor: {
                entityName: "Ironclad",
                value: 10,
                age: 'Castle Age',
            },
            castleRange: {
                entityName: "Crenellations",
                value: 10,
                age: 'Imperial Age',
            },
            garrisonedInfantryFireArrows: {
                entityName: "Crenellations",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            monkHealRange: {
                value: 10,
            },
            towerGarrisonCapacity: {
                value: 10,
            },
            freeMurderHolesUpgrade: {
                value: 10,
            },
            freeHerbalMedicineUpgrade: {
                value: 10,
            },
            farmCostReduction: {
                value: 10,
            },
            infantryArmor: {
                value: 10,
            },
            spearLineArmor: {
                value: 10,
            },
            lightCavalryLineArmor: {
                value: 10,
            },
            heavyCavalryLineArmor: {
                value: 10,
            },
            townCenterGarrisonCapacity: {
                value: 10,
            },
        },
        teamBonuses: {
            conversionDefense: {
                value: 10,
            },
        }
    },
    Turks: {
        uniqueUpgrades: {
            cavalryArcherLineHealth: {
                entityName: "Sipahi",
                value: 10,
                age: 'Castle Age',
            },
            bombardTowerLineRange: {
                entityName: "Artillery",
                value: 10,
                age: 'Imperial Age',
            },
            cannonGalleonLineRange: {
                entityName: "Artillery",
                value: 10,
                age: 'Imperial Age',
            },
            bombardCannonLineRange: {
                entityName: "Artillery",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            gunLineHealth: {
                value: 10,
            },
            bombardCannonLineHealth: {
                value: 10,
            },
            cannonGalleonLineHealth: {
                value: 10,
            },
            janissaryHealth: {
                value: 10,
            },
            gunpowderTechnologiesCostReduction: {
                value: 10,
            },
            freeChemistryUpgrade: {
                value: 10,
            },
            villagerGoldWorkRate: {
                value: 10,
            },
            freeLightCavalryLineUpgrade: {
                value: 10,
            },
            lightCavalryLineArmor: {
                value: 10,
            },
        },
        teamBonuses: {
            gunLineCreationSpeed: {
                value: 10,
            },
            bombardCannonLineCreationSpeed: {
                value: 10,
            },
            cannonGalleonLineCreationSpeed: {
                value: 10,
            },
            janissaryCreationSpeed: {
                value: 10,
            },
        }
    },
    Vietnamese: {
        uniqueUpgrades: {
            battleElephantHealth: {
                entityName: "Chatras",
                value: 10,
                age: 'Castle Age',
            },
            teamRecievesGold: {
                entityName: "Paper Money",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            revealedEnemyPositionsAtGameStart: {
                value: 10,
            },
            footArcherHealth: {
                value: 10,
            },
            skirmisherLineHealth: {
                value: 10,
            },
            cavalryArcherLineHealth: {
                value: 10,
            },
            freeConscription: {
                value: 10,
            },
            economicUpgradesWoodCostReduction: {
                value: 10,
            },
        },
        teamBonuses: {
            imperialSkirmisherEnabled: {
                value: 10,
            },
        }
    },
    Vikings: {
        uniqueUpgrades: {
            infantryAttackAgainstCavalry: {
                entityName: "Chieftains",
                value: 10,
                age: 'Castle Age',
            },
            berserkRegeneration: {
                entityName: "Berserkergang",
                value: 10,
                age: 'Imperial Age',
            },
        },
        civBonuses: {
            warshipsCostReduction: {
                value: 10,
            },
            infantryLineHealth: {
                value: 10,
            },
            spearLineHealth: {
                value: 10,
            },
            berserkHealth: {
                value: 10,
            },
            freeWheelbarrowUpgrade: {
                value: 10,
            },
            freeHandCartUpgrade: {
                value: 10,
            },
        },
        teamBonuses: {
            dockCostReduction: {
                value: 10,
            },
        }
    }
}