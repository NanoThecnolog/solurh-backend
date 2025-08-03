import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { join } from 'path';
import { allowedOrigins } from './common/utils/variables';

async function bootstrap() {
  const port = process.env.PORT || 4731
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService()
  const secret = config.get<string>('JWT_SECRET')
  if (!secret) throw new Error('Secret not found')

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) callback(null, true)
      else callback(new Error('Not allowed by ADMIN ERIC CORS'))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'key', 'Accept'],
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
    maxAge: 86400,
  })

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))


  await app.listen(port);
  console.log(`Servidor rodando na porta ${port}`)
}
bootstrap();