import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) { }

    private async validateUser(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) throw new NotFoundException('Email não encontrado no banco de dados.')
        if (await compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Credenciais inválidas');
    }

    public async login(email: string, password: string) {
        const user = await this.validateUser(email, password);
        console.log(this.jwt)
        const token = this.jwt.sign({ sub: user.id });
        return {
            user,
            token
        }
    }
}