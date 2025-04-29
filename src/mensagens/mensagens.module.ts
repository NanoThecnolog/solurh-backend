import { Module } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MensagensController } from './mensagens.controller';

@Module({
    //providers: [MensagensService, PrismaService],
    //controllers: [MensagensController]
})
export class MensagensModule { }
