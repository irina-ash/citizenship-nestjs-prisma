-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "title" TEXT,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_value_key" ON "Country"("value");
