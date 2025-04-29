import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Injectable()
export class CandidatosService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCandidatoDto) {
        return this.prisma.candidato.create({ data })
    }
    async findAll() {
        return this.prisma.candidato.findMany()
    }
    async findOne(id: string) {
        const candidato = await this.prisma.candidato.findUnique({ where: { id } })
        if (!candidato) throw new NotFoundException('Candidato não encontrado')
        return candidato
    }
    async update(id: string, data: UpdateCandidatoDto) {
        await this.findOne(id)
        return this.prisma.candidato.update({ where: { id }, data })
    }
    async remove(id: string) {
        await this.findOne(id)
        return this.prisma.candidato.delete({ where: { id } })
    }
}
