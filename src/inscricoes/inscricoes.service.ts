import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoDto } from './dto/update-inscricao.dto';

@Injectable()
export class InscricoesService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateInscricaoDto) {
        return this.prisma.inscricao.create({ data })
    }
    async findAll() {
        return this.prisma.inscricao.findMany({ include: { vaga: true, candidato: true } })
    }
    async findOne(id: string) {
        const inscricao = await this.prisma.inscricao.findUnique({
            where: { id }
        })
        if (!inscricao) throw new NotFoundException('Inscrição não encontrada')
        return inscricao
    }
    async update(id: string, data: UpdateInscricaoDto) {
        await this.findOne(id)
        return this.prisma.inscricao.update({ where: { id }, data })
    }
    async remove(id: string) {
        await this.findOne(id)
        return this.prisma.inscricao.delete({ where: { id } })
    }
}
