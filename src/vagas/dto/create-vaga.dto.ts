import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVagaDTO {
    @IsString()
    @IsNotEmpty()
    nome: string
    @IsString()
    @IsNotEmpty()
    localizacao: string
    @IsString()
    @IsNotEmpty()
    descricao: string
    @IsNumber()
    salario: number
}