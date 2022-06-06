import { IsNotEmpty, IsString } from 'class-validator';

export class AlunoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
