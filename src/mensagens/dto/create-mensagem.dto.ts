import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMensageDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}
