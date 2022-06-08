import { IsNotEmpty, IsString } from 'class-validator';

export class AlunoDto {
  codigo: string;
  @IsString()
  @IsNotEmpty()
  nome: string;
}
