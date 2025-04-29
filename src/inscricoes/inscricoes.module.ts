import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InscricoesService } from './inscricoes.service';
import { InscricoesController } from './inscricoes.controller';

@Module({
    //providers: [PrismaService, InscricoesService],
    //controllers: [InscricoesController]
})
export class InscricoesModule { }
