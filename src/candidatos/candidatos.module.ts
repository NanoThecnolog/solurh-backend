import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';

@Module({
    //providers: [PrismaService, CandidatosService],
    //controllers: [CandidatosController]
})
export class CandidatosModule { }
