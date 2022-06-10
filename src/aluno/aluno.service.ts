import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AlunoDto } from './dto';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService) {}
  async add(dto: AlunoDto) {
    try {
      const user = await this.prisma.aluno.create({
        data: dto,
      });
      return user;
    } catch (error) {
      throw new ForbiddenException('Não foi possível criar o aluno');
    }
  }

  async get(id: string) {
    try {
      const user = await this.prisma.aluno.findUnique({
        where: {
          codigo: id,
        },
      });
      return user;
    } catch (error) {
      throw new ForbiddenException('Não foi possível buscar o aluno');
    }
  }

  getAll() {
    return this.prisma.aluno.findMany();
  }

  async delete(id: string) {
    const user = await this.prisma.aluno.delete({
      where: {
        codigo: id,
      },
    });

    return user;
  }

  async update(id: string, dto: AlunoDto) {
    try {
      const user = await this.prisma.aluno.update({
        where: {
          codigo: id,
        },
        data: dto,
      });
      return user;
    } catch (error) {
      throw new ForbiddenException('Não foi possível atualizar o aluno');
    }
  }

  async getAllSemCurso() {
    try {
      const users = await this.prisma.aluno.findMany({
        where: {
          cursos: { none: {} },
        },
      });
      return users;
    } catch (error) {
      throw new ForbiddenException('Não foi possível buscar o aluno');
    }
  }
}
