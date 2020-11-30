// only declare global constants here
const UNAVAILABLE = "unavailable";

// control what buildings get to be taken into account for further statistics
const BUILDING_NAMES = [
    "barracks",
    "archeryRange",
    "stable",
    "siegeWorkshop",
    "dock",
    "defensiveStructures",
    "monastery",
    "blacksmith",
    "university"
];

// only the buildings that cand produce a unit for which is relevant to show a statistic
MILITARY_BUILDINGS_NAME_ARRAY = ["barracks", "archeryRange", "stable", "siegeWorkshop", "dock", "defensiveStructures", "monastery"];

// dictionary that has as key the slug and as value the user friendly name
UNIT_LINE_NAMES = {
    infantryLine: "Militia Line",
    spearLine: "Spearmen Line",
    eagleLine: "Eagle Scout Line",
    footArcherLine: "Archer Line",
    skirmisherLine: "Skirmisher Line",
    horseArcherLine: "Cavalry Archer Line",
    gunLine: "Hand Cannoner Line",
    lightCavalryLine: "Scout Cavalry Line",
    heavyCavalryLine: "Knight Line",
    camelRiderLine: "Camel Rider Line",
    battleElephantLine: "Battle Elephant Line",
    steppeLancerLine: "Steppe Lancer Line",
    ramLine: "Ram Line",
    catapultLine: "Mangonel Line",
    scorpionLine: "Scorpion Line",
    bombardCannonLine: "Bombard Cannon Line",
    galleyLine: "Galley Line",
    fireLine: "Fire Ship Line",
    demoLine: "Demolation Ship Line",
    cannonGalleonLine: "Cannon Galleon Line",
    towerLine: "Watch Tower Line",
    stoneWallLine: "Stone Wall Line",
    bombardTowerLine: "Bombard Tower Line",
    monkLine: "Monk Line",
}