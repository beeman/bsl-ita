/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// GET                    /api/users  -> dame todos user
//  - sollicator datos
// POST                   /api/users  -> guardame este user
//  - actualizar datos    Payload
// --------
// PUT / PATCH
//  - actualizar datos exist
// DELETE                 /api/user/:id
//  - bottar datos
// PATCH / HEAD / OPTIONS

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.enableCors({
    origin: '*',
  });
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
