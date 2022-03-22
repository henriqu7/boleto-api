import { Body, Controller, Delete, Get, Param, Post, HttpException, HttpStatus } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { Boleto } from './schemas/boleto.schema';
import { checkBarCode } from './validations/check-boleto-type';

@Controller('boleto')
export class BoletoController {
  constructor(private readonly boletoService: BoletoService) {}

  @Post()
  async create(@Body() createBoletoDto: CreateBoletoDto) {
    await this.boletoService.create(createBoletoDto);
  }

  @Get()
  async findAll(): Promise<Boleto[]> {
    return this.boletoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const checkBoletoType = checkBarCode(id);
    console.log('boleto: ', checkBoletoType)
    if(checkBoletoType['status'] == false) {
      throw new HttpException('barCode invalid', HttpStatus.BAD_REQUEST);
    }

    return this.boletoService.findOne(checkBoletoType['barcode']);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.boletoService.delete(id);
  }
}