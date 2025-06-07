import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { CreateVagaDTO } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('vagas')
export class VagasController {
    constructor(private readonly vagasService: VagasService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createVaga(@Body() data: CreateVagaDTO, @Request() req: any) {
        const userID = req.user.userId
        return this.vagasService.create(data, userID)
    }
    @Public()
    @Get()
    findAll() {
        return this.vagasService.findAll()
    }
    @Public()
    @Get(`/:id`)
    findById(@Param('id') id: string) {
        return this.vagasService.findOne(id)
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    updateVaga(@Param('id') id: string, @Body() data: UpdateVagaDto) {
        return this.vagasService.update(id, data)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    removeVaga(@Param('id') id: string) {
        return this.vagasService.remove(id)
    }
}