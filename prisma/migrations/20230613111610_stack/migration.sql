-- CreateTable
CREATE TABLE "DeveloperStack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserStack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    CONSTRAINT "UserStack_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DeveloperStackToUserStack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DeveloperStackToUserStack_A_fkey" FOREIGN KEY ("A") REFERENCES "DeveloperStack" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DeveloperStackToUserStack_B_fkey" FOREIGN KEY ("B") REFERENCES "UserStack" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserStack_email_key" ON "UserStack"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperStackToUserStack_AB_unique" ON "_DeveloperStackToUserStack"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperStackToUserStack_B_index" ON "_DeveloperStackToUserStack"("B");
