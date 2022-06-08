import { IsNotEmpty, IsString } from 'class-validator';

export class CursoDto {
  codigo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  emenda: string;
}
