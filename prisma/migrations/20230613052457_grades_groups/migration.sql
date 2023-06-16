-- CreateTable
CREATE TABLE "Grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "DeveloperGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "UserGrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "gradeId" INTEGER,
    "groupId" INTEGER,
    CONSTRAINT "UserGrade_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserGrade_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "DeveloperGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
