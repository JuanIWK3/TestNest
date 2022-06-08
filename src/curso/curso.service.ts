import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CursoDto } from './dto';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}
  async add(dto: CursoDto) {
    try {
      const curso = await this.prisma.curso.create({
        data: dto,
      });
      return curso;
    } catch (error) {
      throw new ForbiddenException('Não foi possível adicionar o curso');
    }
  }

  async get(id: string) {
    try {
      const user = await this.prisma.curso.findUnique({
        where: {
          codigo: id,
        },
      });
      return user;
    } catch (error) {
      throw new ForbiddenException('Não foi possível buscar o curso');
    }
  }

  getAll() {
    return this.prisma.curso.findMany();
  }

  async delete(id: string) {
    const user = await this.prisma.curso.delete({
      where: {
        codigo: id,
      },
    });

    return user;
  }

  async update(id: string, dto: CursoDto) {
    try {
      const curso = await this.prisma.curso.update({
        where: {
          codigo: id,
        },
        data: dto,
      });
      return curso;
    } catch (error) {
      throw new ForbiddenException('Não foi possível atualizar o curso');
    }
  }
}
