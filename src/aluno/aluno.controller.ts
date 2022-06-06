import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDto } from './dto';

@Controller('aluno')
export class AlunoController {
  constructor(private alunoService: AlunoService) {}

  @Post('add')
  addAluno(@Body() dto: AlunoDto) {
    console.log({ dto });

    return this.alunoService.add(dto);
  }

  @Get('/:id')
  getAluno(@Param('id') id: string) {
    console.log({ id });

    return this.alunoService.get(id);
  }

  @Get('all')
  getAlunos() {
    return this.alunoService.getAll();
  }

  @Delete('delete/:id')
  deleteAluno(@Param('id') id: string) {
    return this.alunoService.delete(id);
  }
}
