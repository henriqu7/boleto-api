import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoletoModule } from './boletos/boleto.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/boleto'),
    BoletoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
