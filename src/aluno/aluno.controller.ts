import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get('all')
  getAlunos() {
    return this.alunoService.getAll();
  }

  @Get('/:id')
  getAluno(@Param('id') id: string) {
    console.log({ id });

    return this.alunoService.get(id);
  }

  @Put('update/:id')
  updateAluno(@Param('id') id: string, @Body() dto: AlunoDto) {
    console.log({ id, dto });

    return this.alunoService.update(id, dto);
  }

  @Delete('delete/:id')
  deleteAluno(@Param('id') id: string) {
    return this.alunoService.delete(id);
  }
}
