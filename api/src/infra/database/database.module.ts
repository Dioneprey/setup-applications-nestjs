import { Module } from '@nestjs/common'
import { MongoModule } from './mongo/mongo.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [MongoModule, PrismaModule],
  exports: [MongoModule, PrismaModule],
})
export class DatabaseModule {}
