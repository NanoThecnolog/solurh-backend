import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 4731
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService()
  const secret = config.get<string>('JWT_SECRET')
  if (!secret) throw new Error('Secret not found')

  app.enableCors({
    origin: ['http://localhost:4000', 'https://solurh.pro'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'key', 'Accept'],
    credentials: true,
  })

  await app.listen(port);
  console.log(`Servidor rodando na porta ${port}`)
}
bootstrap();