import { PartialType } from '@nestjs/mapped-types';
import { CreateMensageDto } from './create-mensagem.dto';

export class UpdateMensageDto extends PartialType(CreateMensageDto) { }