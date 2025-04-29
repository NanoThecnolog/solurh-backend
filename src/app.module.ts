import { Module } from '@nestjs/common';
import { VagasService } from './vagas/vagas.service';
import { VagasController } from './vagas/vagas.controller';
import { VagasModule } from './vagas/vagas.module';
import { AuthModule } from './auth/auth.module';
import { CandidatosService } from './candidatos/candidatos.service';
import { CandidatosController } from './candidatos/candidatos.controller';
import { CandidatosModule } from './candidatos/candidatos.module';
import { MensagensService } from './mensagens/mensagens.service';
import { MensagensController } from './mensagens/mensagens.controller';
import { MensagensModule } from './mensagens/mensagens.module';
import { InscricoesService } from './inscricoes/inscricoes.service';
import { InscricoesController } from './inscricoes/inscricoes.controller';
import { InscricoesModule } from './inscricoes/inscricoes.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaExceptionInterceptor } from './common/interceptors/prisma-exception/prisma-exception.interceptor';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { SuccessResponseInterceptor } from './common/interceptors/interceptors.interceptor';
import { AllExceptionsFilter } from './common/interceptors/exception.filter';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyGuard } from './auth/api-key.guard';

@Module({
  imports: [VagasModule, CandidatosModule, MensagensModule, InscricoesModule, UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController, VagasController, CandidatosController, MensagensController, InscricoesController],
  providers: [
    AppService,
    VagasService,
    CandidatosService,
    MensagensService,
    InscricoesService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PrismaExceptionInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: SuccessResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    },
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    }
  ],
})
export class AppModule { }
