import {
    BadRequestException,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync, unlinkSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import PdfParse from 'pdf-parse';

@Controller('upload')
export class UploadController {
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads/documentos',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                    callback(null, filename);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (file.mimetype !== 'application/pdf') {
                    return callback(
                        new BadRequestException('Formato de arquivo não permitido! Utilize PDF'),
                        false
                    )
                }
                callback(null, true)
            },
            limits: {
                fileSize: 10 * 1024 * 1024, // 5 MB
            },
        }),
    )
    async uploadDocumento(@UploadedFile() file: Express.Multer.File) {
        try {
            const fileBuffer = readFileSync(file.path)
            await PdfParse(fileBuffer)
        } catch (err) {
            unlinkSync(file.path)
            throw new BadRequestException('O arquivo enviado não é um PDF válido.')
        }
        return {
            message: 'Arquivo enviado com sucesso',
            filename: file.filename,
            path: file.path,
        };
    }
}
