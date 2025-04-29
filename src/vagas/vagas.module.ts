import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VagasService } from './vagas.service';
import { VagasController } from './vagas.controller';

@Module({
    //providers: [PrismaService, VagasService],
    //controllers: [VagasController]
})
export class VagasModule { }
