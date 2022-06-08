import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule, CursoModule, AlunoModule, PrismaModule],
})
export class AppModule {}
