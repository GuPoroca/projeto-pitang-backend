-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agendamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "dataAgendamento" DATETIME NOT NULL,
    "statusAgendamento" TEXT NOT NULL DEFAULT 'futuro'
);
INSERT INTO "new_Agendamento" ("dataAgendamento", "dataNascimento", "id", "name") SELECT "dataAgendamento", "dataNascimento", "id", "name" FROM "Agendamento";
DROP TABLE "Agendamento";
ALTER TABLE "new_Agendamento" RENAME TO "Agendamento";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
