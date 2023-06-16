-- CreateTable
CREATE TABLE "Questionary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "recomendation" TEXT,
    "hobby" TEXT,
    "workExperience" TEXT,
    "comment" TEXT,
    CONSTRAINT "Questionary_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Questionary_email_key" ON "Questionary"("email");
