-- CreateTable
CREATE TABLE "Aluno" (
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Curso" (
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "emenda" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "CursoAluno" (
    "codigo" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "alunoCodigo" TEXT NOT NULL,
    "cursoCodigo" TEXT NOT NULL,

    CONSTRAINT "CursoAluno_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "CursoAluno" ADD CONSTRAINT "CursoAluno_alunoCodigo_fkey" FOREIGN KEY ("alunoCodigo") REFERENCES "Aluno"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoAluno" ADD CONSTRAINT "CursoAluno_cursoCodigo_fkey" FOREIGN KEY ("cursoCodigo") REFERENCES "Curso"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
