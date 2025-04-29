import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMensageDto } from './dto/create-mensagem.dto';
import { UpdateMensageDto } from './dto/update-mensagem.dto';

@Injectable()
export class MensagensService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateMensageDto) {
        return this.prisma.mensage.create({ data })
    }
    async findAll() {
        return this.prisma.mensage.findMany()
    }
    async findOne(id: string) {
        const message = await this.prisma.mensage.findUnique({ where: { id } })
        if (!message) throw new NotFoundException('Mensagem não encontrada')
        return message
    }
    async update(id: string, data: UpdateMensageDto) {
        await this.findOne(id)
        return this.prisma.mensage.update({ where: { id }, data })
    }
    async remove(id: string) {
        await this.findOne(id)
        return this.prisma.mensage.delete({ where: { id } })
    }
}
