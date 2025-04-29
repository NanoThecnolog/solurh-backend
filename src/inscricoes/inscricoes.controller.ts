import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InscricoesService } from './inscricoes.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoDto } from './dto/update-inscricao.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('inscricoes')
export class InscricoesController {
    constructor(private readonly inscricaoService: InscricoesService) { }

    @Post()
    createInscricao(@Body() data: CreateInscricaoDto) {
        return this.inscricaoService.create(data)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.inscricaoService.findAll()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.inscricaoService.findOne(id)
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    updateInscricao(@Param('id') id: string, @Body() data: UpdateInscricaoDto) {
        return this.inscricaoService.update(id, data)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    removeInscricao(@Param('id') id: string) {
        return this.inscricaoService.remove(id)
    }

}
