import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
