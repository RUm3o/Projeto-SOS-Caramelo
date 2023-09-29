-- CreateTable
CREATE TABLE "animais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "chamados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_solicitacao" TEXT NOT NULL,
    "tipo_solicitacao" TEXT NOT NULL,
    "descricao_solicitacao" TEXT NOT NULL,
    "imagem_solicitacao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
