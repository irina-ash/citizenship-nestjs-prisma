-- CreateTable
CREATE TABLE "Region" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "title" TEXT,
    CONSTRAINT "Region_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "title" TEXT,
    "value" TEXT NOT NULL,
    "timezone" TEXT,
    "regionId" INTEGER,
    "countryId" INTEGER,
    CONSTRAINT "City_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_value_key" ON "Region"("value");

-- CreateIndex
CREATE UNIQUE INDEX "City_value_key" ON "City"("value");
