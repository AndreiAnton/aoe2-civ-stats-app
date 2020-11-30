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
    },
    {
        entityName: "Scout Cavalry",
        value: 1,
        unitClass: "lightCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Light Cavalry",
        value: 1,
        unitClass: "lightCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Hussar",
        value: 1,
        unitClass: "lightCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Knight",
        value: 1,
        unitClass: "heavyCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Cavalier",
        value: 1,
        unitClass: "heavyCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Paladin",
        value: 1,
        unitClass: "heavyCavalryLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Camel Rider",
        value: 1,
        unitClass: "camelRiderLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Heavy Camel Rider",
        value: 1,
        unitClass: "camelRiderLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Imperial Camel",
        value: 1,
        unitClass: "camelRiderLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Battle Elephant",
        value: 1,
        unitClass: "battleElephantLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Elite Battle Elephant",
        value: 1,
        unitClass: "battleElephantLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Steppe Lancer",
        value: 1,
        unitClass: "steppeLancerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Elite Steppe Lancer",
        value: 1,
        unitClass: "steppeLancerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Battering Ram",
        value: 1,
        unitClass: "ramLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Capped Ram",
        value: 1,
        unitClass: "ramLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Siege Ram",
        value: 1,
        unitClass: "ramLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Mangonel",
        value: 1,
        unitClass: "catapultLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Onager",
        value: 1,
        unitClass: "catapultLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Siege Onager",
        value: 1,
        unitClass: "catapultLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Scorpion",
        value: 1,
        unitClass: "scorpionLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Heavy Scorpion",
        value: 1,
        unitClass: "scorpionLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Bombard Cannon",
        value: 1,
        unitClass: "bombardCannonLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Galley",
        value: 1,
        unitClass: "galleyLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "War Galley",
        value: 1,
        unitClass: "galleyLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Galleon",
        value: 1,
        unitClass: "galleyLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Fire Galley",
        value: 1,
        unitClass: "fireLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Fire Ship",
        value: 1,
        unitClass: "fireLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Fast Fire Ship",
        value: 1,
        unitClass: "fireLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Demolition Raft",
        value: 1,
        unitClass: "demoLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Demolition Ship",
        value: 1,
        unitClass: "demoLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Heavy Demolition Ship",
        value: 1,
        unitClass: "demoLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Cannon Galleon",
        value: 1,
        unitClass: "cannonGalleonLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Elite Cannon Galleon",
        value: 1,
        unitClass: "cannonGalleonLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Watch Tower",
        value: 1,
        unitClass: "towerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Guard Tower",
        value: 1,
        unitClass: "towerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Keep",
        value: 1,
        unitClass: "towerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Stone Wall",
        value: 1,
        unitClass: "stoneWallLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Fortified Wall",
        value: 1,
        unitClass: "stoneWallLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Bombard Tower",
        value: 1,
        unitClass: "bombardTowerLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Monk lv 1",
        value: 1,
        unitClass: "monkLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Monk lv 2",
        value: 1,
        unitClass: "monkLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Monk lv 3",
        value: 1,
        unitClass: "monkLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Monk lv 4",
        value: 1,
        unitClass: "monkLine",
        armorClass: "none",
        attackClass: "none"
    },
    {
        entityName: "Monk lv 5",
        value: 1,
        unitClass: "monkLine",
        armorClass: "none",
        attackClass: "none"
    },
]