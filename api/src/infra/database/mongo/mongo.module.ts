// mongoose.module.ts
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { EnvModule } from 'src/infra/env/env.module'
import { EnvService } from 'src/infra/env/env.service'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory(envService: EnvService) {
        const mongoUrl = envService.get(`MONGO_URL`)

        return {
          uri: `${mongoUrl}/nestjs_database`,
        }
      },
    }),
  ],
})
export class MongoModule {}
