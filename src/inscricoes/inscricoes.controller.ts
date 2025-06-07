import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { InscricoesService } from './inscricoes.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoDto } from './dto/update-inscricao.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync, unlinkSync } from 'fs';
//import PdfParse from 'pdf-parse';
import * as pdfParse from 'pdf-parse';

@Controller('inscricoes')
export class InscricoesController {
    constructor(private readonly inscricaoService: InscricoesService) { }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads/curriculos',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    const filename = `cv-${uniqueSuffix}${ext}`;
                    callback(null, filename);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (file.mimetype !== 'application/pdf') {
                    return callback(
                        new BadRequestException('Apenas arquivos PDF são permitidos.'),
                        false,
                    );
                }
                callback(null, true);
            },
            limits: {
                fileSize: 5 * 1024 * 1024, // 5MB
            },
        }),
    )
    async uploadInscricao(@UploadedFile() file: Express.Multer.File, @Body() data: CreateInscricaoDto) {
        console.log(file)
        if (!file) {
            throw new BadRequestException('Arquivo não enviado')
        }
        try {
            const buffer = readFileSync(file.path)
            await pdfParse(buffer)
        } catch (err) {
            unlinkSync(file.path)
            throw new BadRequestException('O Arquivo enviado não é um PDF válido.')
        }
        const candidato = await this.inscricaoService.createCandidato(file.path)

        const inscricao = await this.inscricaoService.create({
            vagaId: data.vagaId,
            candidatoId: candidato.id
        })

        return {
            message: 'Currículo cadastrado com sucesso!',
            inscricao
        }
    }
    /*@Post()
    createInscricao(@Body() data: CreateInscricaoDto) {
        return this.inscricaoService.create(data)
    }*/
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
