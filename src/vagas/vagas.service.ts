import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVagaDTO } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { Request } from 'express';


@Injectable()
export class VagasService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateVagaDTO, userID: number) {
        //console.log(userID)
        return this.prisma.vaga.create({
            data: {
                nome: data.nome,
                localizacao: data.localizacao,
                descricao: data.descricao,
                salario: data.salario,
                createdBy: userID
            }
        })
    }
    async findAll() {
        return this.prisma.vaga.findMany({ include: { inscricoes: true } })
    }
    async findOne(id: string) {
        const vaga = await this.prisma.vaga.findUnique({
            where: { id }
        })
        if (!vaga) throw new NotFoundException('Vaga não encontrada')
        return vaga
    }
    async update(id: string, data: UpdateVagaDto) {
        await this.findOne(id)
        return this.prisma.vaga.update({ where: { id }, data })
    }
    async remove(id: string) {
        await this.findOne(id)
        return this.prisma.vaga.delete({ where: { id } })
    }
}