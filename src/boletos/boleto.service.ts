import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Boleto, BoletoDocument } from './schemas/boleto.schema';
import { CreateBoletoDto } from './dto/create-boleto.dto';

@Injectable()
export class BoletoService {
  constructor(@InjectModel(Boleto.name) private boletoModel: Model<BoletoDocument>) {}

  async create(createBoletoDto: CreateBoletoDto): Promise<Boleto> {
    const createdBoleto = new this.boletoModel(createBoletoDto);
    return createdBoleto.save();
  }

  async findAll(): Promise<Boleto[]> {
    return this.boletoModel.find().exec();
  }

  async findOne(id: string) {
    return this.boletoModel.findOne({ barCode: id }).exec();
  }

  async delete(id: string) {
    const deletedBoleto = await this.boletoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBoleto;
  }
}
