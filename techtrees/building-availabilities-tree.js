let buildingAvailabilitiesTree = {
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