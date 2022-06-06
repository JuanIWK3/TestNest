import { Module } from '@nestjs/common';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AlunoModule, CursoModule, AuthModule],
})
export class AppModule {}
