import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';
import { Prisma } from '@prisma/client';
import {
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class PrismaExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          switch (error.code) {
            case 'P2025':
              return throwError(() => new NotFoundException('Registro não encontrado.'));
            case 'P2002':
              return throwError(() => new ConflictException('Registro já existe.'));
            case 'P2003':
              return throwError(() => new BadRequestException('Referência inválida.'));
          }
        }
        return throwError(() => error);
      }),
    );
  }
}
