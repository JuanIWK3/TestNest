import { Module } from '@nestjs/common';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CursoModule, AlunoModule, PrismaModule],
})
export class AppModule {}
