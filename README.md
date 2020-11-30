# aoe2-civ-stats-app
An app that shows statistics about every civilisation from the famous RTS game, Age of Empires 2 Definitive Edition


## Functions
11/22/2020
16:00
Added a function that returns the highest level available unit from a requested unit line

17:00
Added a function that returns the highest available units of a requested civ from a requested building

19:30
Added functions to build the frontend object
Added Archery Range entry in techtrees/building-availabilities-tree.js json
Added functions to render frontend elements

19:55
Added Stable entry in techtrees/building-availabilities-tree.js json

23:00
Added Siege Workshop, Dock, Defensive Structures and Monastery in entries in techtrees/building-availabilities-tree.js json

11/23/2020
00:00
Added base coeficients for some units

11/29/2020
18:50
-- In techtree.js renamed to diferent sub names --
Renamed unitName to entityName
Renamed unitsCoeficients to unitsArray
added unitClass to each unit in unitsArray
added upgradesTechTree which holds each common technology grouped by building and upgradeLine, it also shows what civs can access them
added classUpgradesObject with maps each unitClass to coresponding upgradeLines
added upgradesArray which holds each common technology (name, value)
added uniqueFeaturesTree which is grouped by civ name and holds the uniqueUpgrades the civBonuses and civTeamBonuses

-- In helpers.js --
renamed unitLine to entityLine
getHighestRequestedLineAvailableUnit() now returns also the highest available tech (useful for blacksmith)
getCivBuildingHighestAvailableTechnologies(civName, buildingName) return the highest available tech from the given building for the given civ
getCivUniqueTechnologies(civName) returns the uniqueUpgradesTree fro the given civ
getCivBonuses(civName) returns the civBonuses for the given civ
getCivTeamBonuses(civName) return the civTeamBonuses for the given civ
getEntityFromArray(array, entityName) return the object by given name from the given array
getCivCommonUpgradesCoeficients(unitName, civtechnologiestree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) return the final coeficient for every given unit
    -first it gets the given unit class
    -then gets the class upgrades
    -then gets the available common upgrades
        it also gets the total value for the civ unique upgrades
        also the total value for the civ bonuses
        also the total value for the civ team bonuses
    -then adds all the bonuses like this:
        CommonUpgrades + UniqueUpgrades + CivBonuses + TeamBonuses
getCivIndividualCoeficients(civBuildingUnitTechtree, civTechnologiesTree, civUniqueUpgradesTree, civBonusesTree, civTeamBonusesTree) returns the coeficient for each unit from each building
    UnitBaseCoeficient + CommonUpgrades + UniqueUpgrades + CivBonuses + TeamBonuses
added new props in buildCivsInfoObject like 
        unittree: {},
        technologiestree: {},
        uniqueupgradestree: {},
        civbonusestree: {},
        civteambonusestree: {},

11/30/2020
14:53
-- In techtree.js --
added more units in unitsArray
renamed for chemestry rangedAttack to rangedFireAttack
added arrowslits civs
added barracks technologies in upgradesTechTree
renamed for Thumb Ring accuracy to accuracyThumbRing
renamed for Parthian Tactics cavalryArcherAttack to cavalryArcherLineAttackAgainstSpears also added differentiator for unique units uniqueCavalryArcherAttackAgainstSpears
added stable technologies in upgradesTechTree
added dock technologies in upgradesTechTree
added monastery technologies in upgradesTechTree
added correspondig classes to infantryLine in classUpgradesObject
added correspondig classes to spearLine in classUpgradesObject
added correspondig classes to eagleLine in classUpgradesObject
added correspondig classes to footArcherLine in classUpgradesObject
added correspondig classes to skirmisherLine in classUpgradesObject
added correspondig classes to horseArcherLine in classUpgradesObject
added correspondig classes to gunLine in classUpgradesObject
added correspondig classes to lightCavalryLine in classUpgradesObject
added correspondig classes to heavyCavalryLine in classUpgradesObject
added correspondig classes to camelRiderLine in classUpgradesObject
added correspondig classes to battleElephantLine in classUpgradesObject
added correspondig classes to steppeLancerLine in classUpgradesObject
added correspondig classes to ramLine in classUpgradesObject
added correspondig classes to catapultLine in classUpgradesObject
added correspondig classes to scorpionLine in classUpgradesObject
added correspondig classes to bombardCannonLine in classUpgradesObject
added correspondig classes to galleyLine in classUpgradesObject
added correspondig classes to fireLine in classUpgradesObject
added correspondig classes to demoLine in classUpgradesObject
added correspondig classes to cannonGalleonLine in classUpgradesObject
added correspondig classes to towerLine in classUpgradesObject
added correspondig classes to stoneWallLine in classUpgradesObject
added correspondig classes to bombardTowerLine in classUpgradesObject
added correspondig classes to monkLine in classUpgradesObject
added more upgrades in upgradesArray
modified some classes in uniqueFeaturesTree

19:00
-- In script.js --
added UNIT_LINE_NAMES which holds maps the unitLineNameSlug to a more user friendly version
added function to render the charts
added chart.js source code and stylesheet in chartjs folder