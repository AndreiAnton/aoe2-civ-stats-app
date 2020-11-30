let upgradesAvailabilitiesTree = {
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
        rangedFireAttack: {
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
            unavailable: ["Bulgarians", "Burmese", "Cumans", "Ethiopians", "Goths", "Huns", "Indians", "Khmer", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Slavs", "Tatars"],
            highestTier: {
                entityName: "Arrowslits",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Byzantines", "Celts", "Chinese", "Franks", "Incas", "Italians", "Japanese", "Koreans", "Saracens", "Spanish", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        }
    },
    barracks: {
        infantryLineCostReduction: {
            unavailable: ["Chinese", "Cumans", "Goths", "Huns", "Khmer", "Lithuanians", "Mayans", "Mongols", "Tatars"],
            highestTier: {
                entityName: "Supplies",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Ethiopians", "Franks", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Magyars", "Malay", "Malians", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks", "Vietnamese", "Vikings"],
            },
        },
        infantrySpeed: {
            unavailable: ["Celts", "Khmer", "Magyars", "Portuguese"],
            highestTier: {
                entityName: "Squires",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"],
            },
        },
        infantryAttackAgainstBuildings: {
            unavailable: ["Goths"],
            highestTier: {
                entityName: "Arson",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"],

            },
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
        accuracyThumbRing: {
            unavailable: ["Aztecs", "Britons", "Burmese", "Celts", "Franks", "Goths", "Khmer", "Slavs", "Teutons"],
            highestTier: {
                entityName: "Thumb Ring",
                upgradeLevel: 1,
                civs: ["Berbers", "Bulgarians", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Huns", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        cavalryArcherLineAttackAgainstSpears: {
            unavailable: ["Aztecs", "Berbers", "Britons", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Goths", "Incas", "Italians", "Koreans", "Lithuanians", "Malay", "Malians", "Mayans", "Portuguese", "Slavs", "Spanish", "Teutons", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Parthian Tactics",
                upgradeLevel: 1,
                civs: ["Bulgarians", "Burmese", "Cumans", "Huns", "Indians", "Japanese", "Khmer", "Magyars", "Mongols", "Persians", "Saracens", "Tatars", "Turks"]
            }
        },
        uniqueCavalryArcherAttackAgainstSpears: {
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
    },
    stable: {
        mountedUnitsHealth: {
            unavailable: ["Aztecs", "Britons", "Byzantines", "Celts", "Ethiopians", "Franks", "Incas", "Koreans", "Malay", "Mayans", "Vikings"],
            highestTier: {
                entityName: "Bloodlines",
                upgradeLevel: 1,
                civs: ["Berbers", "Bulgarians", "Burmese", "Chinese", "Cumans", "Goths", "Huns", "Indians", "Italians", "Japanese", "Khmer", "Lithuanians", "Magyars", "Malians", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese"],

            },
        },
        cavalrySpeed: {
            unavailable: ["Aztecs", "Cumans", "Incas", "Mayans", "Teutons", "Vikings"],
            highestTier: {
                entityName: "Husbandry",
                upgradeLevel: 1,
                civs: ["Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Goths", "Huns", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Turks", "Vietnamese"],

            },
        }
    },
    dock: {
        shipArmor: {
            unavailable: [],
            highestTier: {
                entityName: "Careening",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        transportShipCarryCapacity: {
            unavailable: [],
            highestTier: {
                entityName: "Careening",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        shipSpeed: {
            unavailable: ["Bulgarians", "Cumans", "Goths", "Mongols", "Teutons"],
            highestTier: {
                entityName: "Dry Dock",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Burmese", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        transportShipAdvancedCarryCapacity: {
            unavailable: ["Bulgarians", "Cumans", "Goths", "Mongols", "Teutons"],
            highestTier: {
                entityName: "Dry Dock",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Burmese", "Byzantines", "Celts", "Chinese", "Ethiopians", "Franks", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Turks", "Vietnamese", "Vikings"]
            }
        },
        allShipsCostReduction: {
            unavailable: ["Berbers", "Bulgarians", "Burmese", "Cumans", "Franks", "Huns", "Indians", "Khmer", "Lithuanians", "Malians", "Persians", "Portuguese", "Saracens", "Slavs", "Tatars", "Teutons", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Shipwright",
                upgradeLevel: 1,
                civs: ["Aztecs", "Britons", "Byzantines", "Celts", "Chinese", "Ethiopians", "Goths", "Incas", "Italians", "Japanese", "Koreans", "Magyars", "Malay", "Mayans", "Mongols", "Spanish", "Turks"]
            }
        },
        allShipsBuildTime: {
            unavailable: ["Berbers", "Bulgarians", "Burmese", "Cumans", "Franks", "Huns", "Indians", "Khmer", "Lithuanians", "Malians", "Persians", "Portuguese", "Saracens", "Slavs", "Tatars", "Teutons", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Shipwright",
                upgradeLevel: 1,
                civs: ["Aztecs", "Britons", "Byzantines", "Celts", "Chinese", "Ethiopians", "Goths", "Incas", "Italians", "Japanese", "Koreans", "Magyars", "Malay", "Mayans", "Mongols", "Spanish", "Turks"]
            }
        }
    },
    monastery: {
        buildingConversionEnabled: {
            unavailable: ["Britons", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Koreans", "Magyars", "Mayans", "Mongols", "Persians", "Tatars", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Redemption",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Bulgarians", "Burmese", "Byzantines", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Lithuanians", "Malay", "Malians", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks"]
            }
        },
        siegeConversionEnabled: {
            unavailable: ["Britons", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Koreans", "Magyars", "Mayans", "Mongols", "Persians", "Tatars", "Vietnamese", "Vikings"],
            highestTier: {
                entityName: "Redemption",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Bulgarians", "Burmese", "Byzantines", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Lithuanians", "Malay", "Malians", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks"]
            }
        },
        monksCanConvertMonks: {
            unavailable: ["Britons", "Bulgarians", "Celts", "Franks", "Goths", "Incas", "Indians", "Khmer", "Koreans", "Magyars", "Persians"],
            highestTier: {
                entityName: "Atonement",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Burmese", "Byzantines", "Chinese", "Cumans", "Ethiopians", "Huns", "Italians", "Japanese", "Lithuanians", "Malay", "Malians", "Mayans", "Mongols", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        garrisonedUnitsHealFaster: {
            unavailable: ["Byzantines", "Huns", "Turks", "Vikings"],
            highestTier: {
                entityName: "Herbal Medicine",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Vietnamese"]
            }
        },
        unitsDieInsteadOfConvert: {
            unavailable: ["Britons", "Burmese", "Chinese", "Goths", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Persians", "Slavs", "Tatars", "Vietnamese"],
            highestTier: {
                entityName: "Heresy",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Bulgarians", "Byzantines", "Celts", "Cumans", "Ethiopians", "Franks", "Huns", "Incas", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Portuguese", "Saracens", "Spanish", "Teutons", "Turks", "Vikings"]
            }
        },
        monkHealth: {
            unavailable: ["Berbers", "Bulgarians", "Mongols", "Persians", "Tatars", "Vikings"],
            highestTier: {
                entityName: "Sanctity",
                upgradeLevel: 1,
                civs: ["Aztecs", "Britons", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks", "Vietnamese"]
            }
        },
        monkSpeed: {
            unavailable: ["Incas", "Malay", "Vietnamese"],
            highestTier: {
                entityName: "Fervor",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vikings"]
            }
        },
        conversionDefense: {
            unavailable: ["Bulgarians", "Magyars", "Tatars"],
            highestTier: {
                entityName: "Faith",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks", "Vietnamese", "Vikings"]
            }
        },
        monkFasterPowerRegeneration: {
            unavailable: ["Celts", "Cumans", "Koreans", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Turks", "Vikings"],
            highestTier: {
                entityName: "Illumination",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Lithuanians", "Magyars", "Malay", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Vietnamese"]
            }
        },
        monkConversionRange: {
            unavailable: ["Berbers", "Bulgarians", "Celts", "Cumans", "Ethiopians", "Goths", "Huns", "Khmer", "Mongols", "Turks"],
            highestTier: {
                entityName: "Block Printing",
                upgradeLevel: 1,
                civs: ["Aztecs", "Britons", "Burmese", "Byzantines", "Chinese", "Franks", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Vietnamese", "Vikings"]
            }
        },
        monkLineOfSight: {
            unavailable: ["Berbers", "Bulgarians", "Celts", "Cumans", "Ethiopians", "Goths", "Huns", "Khmer", "Mongols", "Turks"],
            highestTier: {
                entityName: "Block Printing",
                upgradeLevel: 1,
                civs: ["Aztecs", "Britons", "Burmese", "Byzantines", "Chinese", "Franks", "Incas", "Indians", "Italians", "Japanese", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Vietnamese", "Vikings"]
            }
        },
        advancedGroupConversion: {
            unavailable: ["Celts", "Cumans", "Huns", "Malay", "Mongols", "Tatars", "Vikings"],
            highestTier: {
                entityName: "Theocracy",
                upgradeLevel: 1,
                civs: ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Chinese", "Ethiopians", "Franks", "Goths", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malians", "Mayans", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Teutons", "Turks", "Vietnamese"]
            }
        },
    }
}