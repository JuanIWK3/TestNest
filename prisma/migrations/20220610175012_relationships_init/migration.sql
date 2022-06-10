-- CreateTable
CREATE TABLE "alunos" (
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "cursos" (
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "emenda" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "curso_alunos" (
    "codigo" TEXT NOT NULL,
    "alunoCodigo" TEXT NOT NULL,
    "cursoCodigo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "curso_alunos_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "curso_alunos" ADD CONSTRAINT "curso_alunos_alunoCodigo_fkey" FOREIGN KEY ("alunoCodigo") REFERENCES "alunos"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso_alunos" ADD CONSTRAINT "curso_alunos_cursoCodigo_fkey" FOREIGN KEY ("cursoCodigo") REFERENCES "cursos"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
