import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInscricaoDto {
    @IsUUID()
    @IsNotEmpty()
    vagaId: string;

    @IsUUID()
    @IsNotEmpty()
    candidatoId: string;
}
