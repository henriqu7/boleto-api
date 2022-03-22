import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoletoDocument = Boleto & Document;

@Schema()
export class Boleto {
  @Prop()
  barCode: string;

  @Prop()
  amount: number;

  @Prop()
  expirationDate: Date;
}

export const BoletoSchema = SchemaFactory.createForClass(Boleto);