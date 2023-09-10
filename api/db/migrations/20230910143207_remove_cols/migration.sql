/*
  Warnings:

  - You are about to drop the column `costElectricityAnnual` on the `HeatPumpConversion` table. All the data in the column will be lost.
  - You are about to drop the column `costNatGasAnnual` on the `HeatPumpConversion` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HeatPumpConversion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorName" TEXT NOT NULL,
    "authorUserId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "commentary" TEXT,
    "electricityUsageTotalPreHPAnnualKwHr" REAL NOT NULL,
    "electricityCostTotalPreHPAnnualDollars" REAL NOT NULL,
    "gasUsageTotalPreHPAnnualTherms" REAL NOT NULL,
    "gasCostTotalPreHPAnnualDollars" REAL NOT NULL,
    "gasUsageWaterHeaterAnnualTherms" REAL NOT NULL,
    "gasUsageOtherAnnualTherms" REAL NOT NULL,
    "furnaceEfficiencyPercent" REAL NOT NULL,
    "heatPumpCOP" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_HeatPumpConversion" ("authorName", "authorUserId", "commentary", "createdAt", "description", "electricityCostTotalPreHPAnnualDollars", "electricityUsageTotalPreHPAnnualKwHr", "furnaceEfficiencyPercent", "gasCostTotalPreHPAnnualDollars", "gasUsageOtherAnnualTherms", "gasUsageTotalPreHPAnnualTherms", "gasUsageWaterHeaterAnnualTherms", "heatPumpCOP", "id", "title") SELECT "authorName", "authorUserId", "commentary", "createdAt", "description", "electricityCostTotalPreHPAnnualDollars", "electricityUsageTotalPreHPAnnualKwHr", "furnaceEfficiencyPercent", "gasCostTotalPreHPAnnualDollars", "gasUsageOtherAnnualTherms", "gasUsageTotalPreHPAnnualTherms", "gasUsageWaterHeaterAnnualTherms", "heatPumpCOP", "id", "title" FROM "HeatPumpConversion";
DROP TABLE "HeatPumpConversion";
ALTER TABLE "new_HeatPumpConversion" RENAME TO "HeatPumpConversion";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
