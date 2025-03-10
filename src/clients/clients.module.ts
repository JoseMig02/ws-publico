import { Module } from '@nestjs/common';
import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),

  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientsModule { }
