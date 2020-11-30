let classUpgradesObject = {
    infantryLine: [
        "meleAttack",
        "infantryArmor",
        "infantrySpeed",
        "infantryLineSpeed",
        "infantryLineOfSight",
        "conversionDefense",
        "creationSpeed",
        "infantryLineCostReduction",
        "infantryAttackAgainstBuildings",
        "infantryAttack",
        "infantryAttackAgainstCavalry",
        "barracksWorktime",
        "infantryLineGoldCost",
        "militaryUnitsCreationSpeed",
        "freeInfantryLineUpgrade",
        "infantryRateOfFire",
        "allUnitsGoldCostReduction",
        "elevationAttack",
        "infantryLineHealth",
        "freeSuppliesUpgrade",
        "infantryCostReduction"
    ],
    spearLine: [
        "meleAttack",
        "infantryArmor",
        "infantrySpeed",
        "infantryLineSpeed",
        "infantryLineOfSight",
        "conversionDefense",
        "creationSpeed",
        "infantryAttackAgainstBuildings",
        "infantryAttack",
        "infantryAttackAgainstCavalry",
        "spearLineArmor",
        "barracksWorktime",
        "militaryUnitsCreationSpeed",
        "spearLineCostReduction",
        "freePikemanUpgrade",
        "infantryCostReduction",
        "infantryRateOfFire",
        "spearLineSpeed",
        "elevationAttack",
        "infantryLineHealth",
    ],
    eagleLine: [
        "meleAttack",
        "infantryArmor",
        "infantrySpeed",
        "infantryLineOfSight",
        "conversionDefense",
        "creationSpeed",
        "infantryAttackAgainstBuildings",
        "infantryAttack",
        "eagleLineArmor",
        "eagleLineHealth",
        "militaryUnitsCreationSpeed",
        "barracksWorktime",
    ],
    footArcherLine: [
        "rangedAttack",
        "rangedFireAttack",
        "range",
        "rateOfFire",
        "accuracy",
        "accuracyThumbRing",
        "archerArmor",
        "conversionDefense",
        "creationSpeed",
        "footArcherAttackAgainstBuildings",
        "footArcherRange",
        "footArcherArmor",
        "footArcherLineCostReduction",
        "archeryRangeWorktime",
        "militaryUnitsCreationSpeed",
        "footArcherRateOfFire",
        "allUnitsGoldCostReduction",
        "elevationAttack",
        "freeThumbRingUpgrade",
        "freeChemistryUpgrade",
        "footArcherHealth",
        "footArcherLineWoodCostReduction",
        "footArcherLineLineOfSight",
        "footArcherGoldCost",
        "footArcherLineRange",
    ],
    skirmisherLine: [
        "rangedAttack",
        "rangedFireAttack",
        "range",
        "accuracy",
        "accuracyThumbRing",
        "archerArmor",
        "conversionDefense",
        "creationSpeed",
        "skirmisherLineRange",
        "skirmisherLineAttack",
        "skirmisherLineMinimumRange",
        "skirmisherLineArmor",
        "militaryUnitsCreationSpeed",
        "skirmisherLineCostReduction",
        "skirmisherLineWoodCostReduction",
        "skirmisherLineSpeed",
        "elevationAttack",
        "freeThumbRingUpgrade",
        "freeChemistryUpgrade",
        "archeryRangeWorktime",
        "skirmisherLineHealth",
    ],
    horseArcherLine: [
        "rangedAttack",
        "rangedFireAttack",
        "range",
        "accuracy",
        "accuracyThumbRing",
        "archerArmor",
        "conversionDefense",
        "creationSpeed",
        "cavalryArcherLineAttackAgainstSpears",
        "cavalryArcherArmor",
        "rateOfFire",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "cavalryArcherLineHealth",
        "cavalryArcherLineAttack",
        "cavalryArcherRange",
        "cavalryArcherLineProductionSpeed",
        "cavalryArcherLineWoodCostReduction",
        "cavalryArcherLineCostReduction",
        "cavalryArcherRateOfFire",
        "allUnitsGoldCostReduction",
        "cavalryArcherAttackAgainstBuildings",
        "elevationAttack",
        "freeThumbRingUpgrade",
        "freeParthianTacticsUpgrade",
        "freeChemistryUpgrade",
        "archeryRangeWorktime",
        "cavalryArcherLineLineOfSight",
    ],
    gunLine: [
        "archerArmor",
        "conversionDefense",
        "creationSpeed",
        "gunLineRange",
        "gunLineAccuracy",
        "gunLineCostReduction",
        "allUnitsGoldCostReduction",
        "gunLineRateOfFire",
        "elevationAttack",
        "freeChemistryUpgrade",
        "gunLineHealth",
        "archeryRangeWorktime",
        "gunLineCreationSpeed",
    ],
    lightCavalryLine: [
        "meleAttack",
        "cavalryArmor",
        "conversionDefense",
        "creationSpeed",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "lightCavalryLineAttack",
        "cavalryAttackAgainstBuildings",
        "cavalryRateOfFire",
        "scoutCavalryLineArmor",
        "stableWorktime",
        "scoutCavalryLineProductionSpeed",
        "stableUnitsCostReduction",
        "lightCavalryLineHealth",
        "lightCavalryLineArmor",
        "freeBlacksmithMeleAttackUpgrades",
        "lightCavalryLineCostReduction",
        "elevationAttack",
        "freeLightCavalryLineUpgrade",
        "lightCavalryLineLineOfSight",
    ],
    heavyCavalryLine: [
        "meleAttack",
        "cavalryArmor",
        "conversionDefense",
        "creationSpeed",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "heavyCavalryLineAttack",
        "cavalryAttackAgainstBuildings",
        "cavalryRateOfFire",
        "stableWorktime",
        "stableUnitsCostReduction",
        "heavyCavalryLineHealth",
        "freeBlacksmithMeleAttackUpgrades",
        "allUnitsGoldCostReduction",
        "elevationAttack",
        "heavyCavalryLineArmor",
        "heavyCavalryLineLineOfSight",
        "heavyCavalryLineAttackAgainstArchers",
    ],
    camelRiderLine: [
        "meleAttack",
        "cavalryArmor",
        "conversionDefense",
        "creationSpeed",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "camelRiderLineHealth",
        "camelRiderLineAttack",
        "camelRiderLineRegeneration",
        "stableUnitsCostReduction",
        "camelRiderLineCostReduction",
        "camelRiderLineArmor",
        "elevationAttack",
        "stableWorktime",
        "camelRiderLineAttackAgainstBuildings",
    ],
    battleElephantLine: [
        "meleAttack",
        "cavalryArmor",
        "conversionDefense",
        "creationSpeed",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "battleElephantHealth",
        "cavalryAttackAgainstBuildings",
        "battleElephantAttack",
        "battleElephantArmor",
        "battleElephantLineSpeed",
        "battleElephantLineCostReduction",
        "stableWorktime",
    ],
    steppeLancerLine: [
        "meleAttack",
        "cavalryArmor",
        "conversionDefense",
        "creationSpeed",
        "mountedUnitsHealth",
        "cavalrySpeed",
        "steppeLancerLineLineArmor",
        "steppeLancerLineProductionSpeed",
        "steppeLancerLineHealth",
        "elevationAttack",
        "stableWorktime",
    ],
    ramLine: [
        "siegeAttack",
        "conversionDefense",
        "siegeHealth",
        "siegeArmor",
        "siegeSpeed",
        "militaryUnitsCreationSpeed",
        "siegeWorkshopUpgradesFoodCostReduction",
        "siegeRateOfFire",
        "batteringRamFeudalAge",
        "cappedRamCastleAge",
        "allUnitsGoldCostReduction",
        "ramLineCostReduction",
        "elevationAttack",
        "siegeWorkshopWorktime",
    ],
    catapultLine: [
        "siegeAttack",
        "rangedFireAttack",
        "siegeRange",
        "conversionDefense",
        "siegeHealth",
        "catapultLineRange",
        "siegeArmor",
        "siegeSpeed",
        "militaryUnitsCreationSpeed",
        "siegeWorkshopUpgradesFoodCostReduction",
        "siegeRateOfFire",
        "allUnitsGoldCostReduction",
        "catapultLineCostReduction",
        "elevationAttack",
        "siegeWorkshopWorktime",
        "catapultLineMinimumRange",
    ],
    scorpionLine: [
        "siegeAttack",
        "rangedFireAttack",
        "siegeRange",
        "conversionDefense",
        "siegeHealth",
        "scorpionAttack",
        "siegeArmor",
        "siegeSpeed",
        "militaryUnitsCreationSpeed",
        "siegeWorkshopUpgradesFoodCostReduction",
        "siegeRateOfFire",
        "allUnitsGoldCostReduction",
        "scorpionLineCostReduction",
        "elevationAttack",
        "siegeWorkshopWorktime",
        "scorpionRange",
    ],
    bombardCannonLine: [
        "siegeAttack",
        "siegeRange",
        "conversionDefense",
        "bombardCannonLineRange",
        "bombardCannonLineAccuracy",
        "siegeArmor",
        "bombardCannonLineCostReduction",
        "allUnitsGoldCostReduction",
        "bombardCannonLineRateOfFire",
        "bombardCannonLineHealth",
        "freeChemistryUpgrade",
        "siegeWorkshopWorktime",
        "bombardCannonLineCreationSpeed",
    ],
    galleyLine: [
        "rangedAttack",
        "rangedFireAttack",
        "range",
        "accuracy",
        "shipArmor",
        "shipSpeed",
        "conversionDefense",
        "allShipsCostReduction",
        "allShipsBuildTime",
        "militaryUnitsCreationSpeed",
        "dockTechnologiesCostReduction",
        "dockWorkTime",
        "allUnitsGoldCostReduction",
        "allShipsHealth",
        "galleyLineRateOfFire",
        "freeChemistryUpgrade",
        "warshipsCostReduction",
        "galleyLineWoodCostReduction",
        "galleyLineLineOfSight",
    ],
    fireLine: [
        "shipArmor",
        "shipSpeed",
        "conversionDefense",
        "allShipsCostReduction",
        "allShipsBuildTime",
        "fireShipRange",
        "militaryUnitsCreationSpeed",
        "fireShipRateOfFire",
        "dockTechnologiesCostReduction",
        "dockWorkTime",
        "allUnitsGoldCostReduction",
        "allShipsHealth",
        "fireLineWoodCostReduction",
    ],
    demoLine: [
        "shipArmor",
        "shipSpeed",
        "conversionDefense",
        "allShipsCostReduction",
        "allShipsBuildTime",
        "militaryUnitsCreationSpeed",
        "demoLineHealth",
        "dockTechnologiesCostReduction",
        "dockWorkTime",
        "allUnitsGoldCostReduction",
        "allShipsHealth",
        "warshipsCostReduction",
    ],
    cannonGalleonLine: [
        "shipArmor",
        "shipSpeed",
        "conversionDefense",
        "allShipsCostReduction",
        "allShipsBuildTime",
        "cannonGalleonLineRange",
        "cannonGalleonLineAccuracy",
        "dockTechnologiesCostReduction",
        "cannonGalleonLineCostReduction",
        "dockWorkTime",
        "allUnitsGoldCostReduction",
        "allShipsHealth",
        "cannonGalleonLineAccuracy",
        "cannonGalleonLineRateOfFire",
        "elevationAttack",
        "cannonGalleonLineHealth",
        "gunpowderTechnologiesCostReduction",
        "freeChemistryUpgrade",
        "warshipsCostReduction",
        "cannonGalleonLineWoodCostReduction",
        "cannonGalleonLineCreationSpeed",
    ],
    towerLine: [
        "buildingHealth",
        "rangedAttack",
        "rangedFireAttack",
        "towerDamage",
        "antiShipAttack",
        "range",
        "buildingMinimumRange",
        "accuracy",
        "buildingArmor",
        "conversionDefense",
        "buildingConstructionSpeed",
        "towerHealth",
        "towerRange",
        "towerRateOfFire",
        "garrisonedInfantryFireArrows",
        "freeTownWatch",
        "buildingStoneCostReduction",
        "freeGuardTowerUpgrade",
        "freeKeepUpgrade",
        "buildingsExceptFarmsCostReduction",
        "villagerBuilderWorkRate",
        "towerGarrisonCapacity",
        "freeMurderHolesUpgrade",
        "freeHerbalMedicineUpgrade",
        "towerLineOfSight",
    ],
    stoneWallLine: [
        "stoneWallHealth",
        "buildingConstructionSpeed",
        "buildingStoneCostReduction",
        "villagerBuilderWorkRate",
        "stoneWallCostReduction",
    ],
    bombardTowerLine: [
        "buildingHealth",
        "rangedAttack",
        "rangedFireAttack",
        "antiShipAttack",
        "range",
        "buildingMinimumRange",
        "accuracy",
        "buildingArmor",
        "buildingConstructionSpeed",
        "towerHealth",
        "bombardTowerLineRange",
        "bombardTowerLineAccuracy",
        "freeTownWatch",
        "freeBombardTowerUpgrade",
        "villagerBuilderWorkRate",
        "towerGarrisonCapacity",
        "freeMurderHolesUpgrade",
        "gunpowderTechnologiesCostReduction",
        "freeChemistryUpgrade",
        "towerLineOfSight",
    ],
    monkLine: [
        "monkHealth",
        "monkConversionRange",
        "monkLineOfSight",
        "monkSpeed",
        "buildingConversionEnabled",
        "siegeConversionEnabled",
        "monksCanConvertMonks",
        "monkFasterPowerRegeneration",
        "advancedGroupConversion",
        "conversionDefense",
        "unitsDieInsteadOfConvert",
        "monkArmor",
        "conversionSpeed",
        "monkReturnGoldPercent",
        "monasteryUpgradesCostReduction",
        "upgradesCostReduction",
        "allUnitsGoldCostReduction",
        "monkHealRange",
        "monkHealRate",
        "monasteryWorkTime",
    ]
}