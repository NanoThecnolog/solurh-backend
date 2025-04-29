import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateMensageDto } from './dto/create-mensagem.dto';
import { MensagensService } from './mensagens.service';
import { UpdateMensageDto } from './dto/update-mensagem.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('mensagens')
export class MensagensController {
    constructor(private readonly messageService: MensagensService) { }
    @Post()
    createMessage(@Body() data: CreateMensageDto) {
        return this.messageService.create(data)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.messageService.findAll()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.messageService.findOne(id)
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    updateMessage(@Param('id') id: string, @Body() data: UpdateMensageDto) {
        return this.messageService.update(id, data)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    removeMessage(@Param('id') id: string) {
        return this.messageService.remove(id)
    }

}
