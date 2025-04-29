import { PartialType } from '@nestjs/mapped-types';
import { CreateVagaDTO } from './create-vaga.dto';

export class UpdateVagaDto extends PartialType(CreateVagaDTO) { }