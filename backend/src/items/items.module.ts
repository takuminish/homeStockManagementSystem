import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ItemsRepository } from './items.repository';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ItemsController],
  providers: [ItemsService, ConfigService, ItemsRepository]
})
export class ItemsModule { }
