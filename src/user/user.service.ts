import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto) {
        const hashPass = await hash(data.password, 16)
        return this.prisma.user.create(
            {
                data: {
                    nome: data.nome,
                    email: data.email,
                    password: hashPass,
                    role: data.role
                }, select: {
                    id: true,
                    nome: true,
                    email: true,
                    role: true
                }
            }
        )
    }
    async findAll() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        })
    }
    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                nome: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        })
        if (!user) throw new NotFoundException(`User not found`)
        return user
    }
    async update(id: number, data: UpdateUserDto) {
        const user = await this.findOne(id)
        const update: any = {
            nome: data.nome ?? user.nome,
            email: data.email ?? user.email,
            role: data.role ?? user.role
        }

        if (data.password) {
            update.password = await hash(data.password, 16)
        }
        return this.prisma.user.update({
            where: { id },
            data: update,
            select: {
                id: true,
                nome: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        })
    }
    async remove(id: number) {
        await this.findOne(id)
        return this.prisma.user.delete({ where: { id } })
    }
}
