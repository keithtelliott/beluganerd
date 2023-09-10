-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "HeatPumpConversion" (
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
    "costNatGasAnnual" REAL NOT NULL,
    "costElectricityAnnual" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");
