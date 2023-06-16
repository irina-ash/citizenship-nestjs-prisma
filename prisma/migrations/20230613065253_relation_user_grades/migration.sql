-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserGrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "gradeId" INTEGER,
    "groupId" INTEGER,
    CONSTRAINT "UserGrade_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserGrade_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserGrade_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "DeveloperGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserGrade" ("email", "gradeId", "groupId", "id") SELECT "email", "gradeId", "groupId", "id" FROM "UserGrade";
DROP TABLE "UserGrade";
ALTER TABLE "new_UserGrade" RENAME TO "UserGrade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
