import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoletoController } from './boleto.controller';
import { BoletoService } from './boleto.service';
import { Boleto, BoletoSchema } from './schemas/boleto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Boleto.name, schema: BoletoSchema }])],
  controllers: [BoletoController],
  providers: [BoletoService],
})
export class BoletoModule {}