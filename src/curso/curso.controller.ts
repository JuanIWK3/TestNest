import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDto } from './dto';

@Controller('curso')
export class CursoController {
  constructor(private cursoService: CursoService) {}

  @Post('add')
  addCurso(@Body() dto: CursoDto) {
    console.log({ dto });

    return this.cursoService.add(dto);
  }

  @Get('all')
  getCurso() {
    return this.cursoService.getAll();
  }

  @Get('/:id')
  getCursos(@Param('id') id: string) {
    console.log({ id });

    return this.cursoService.get(id);
  }

  @Put('update/:id')
  updateCurso(@Param('id') id: string, @Body() dto: CursoDto) {
    console.log({ id, dto });

    return this.cursoService.update(id, dto);
  }

  @Delete('delete/:id')
  deleteCurso(@Param('id') id: string) {
    return this.cursoService.delete(id);
  }

  @Put('add-teste/:id')
  addAluno(@Param('id') id: string, @Body() Aluno: { codAluno: string }) {
    console.log('chegou no back');

    return this.cursoService.addAluno(id, Aluno.codAluno);
  }

  @Get('alunos/:id')
  getAlunosByCurso(@Param('id') id: string) {
    return this.cursoService.getAlunosByCurso(id);
  }

  @Delete('remove-aluno')
  removeAluno(@Body() curso_aluno: { codigo: string }) {
    return this.cursoService.removeAluno(curso_aluno.codigo);
  }
}
