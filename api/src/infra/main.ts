import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { Env } from './env/env'
import { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: ['*'],
  })

  const envService = app.get<ConfigService<Env, true>>(EnvService)
  const port = envService.get('PORT')

  await app.listen(port, '0.0.0.0').then(() => {
    console.log(`[?] HTTP server running on port: ${port}!`)
  })
}

bootstrap()
