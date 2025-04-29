import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('candidatos')
export class CandidatosController {
    constructor(private readonly candidatosService: CandidatosService) { }

    @Post()
    createCandidato(@Body() data: CreateCandidatoDto) {
        return this.candidatosService.create(data)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.candidatosService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.candidatosService.findOne(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    updateCandidato(@Param('id') id: string, @Body() data: UpdateCandidatoDto) {
        return this.candidatosService.update(id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    removeCandidato(@Param('id') id: string) {
        return this.candidatosService.remove(id)
    }
}
