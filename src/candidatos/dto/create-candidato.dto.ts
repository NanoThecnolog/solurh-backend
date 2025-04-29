import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCandidatoDto {
    @IsString()
    @IsNotEmpty()
    cv_path: string;
}
