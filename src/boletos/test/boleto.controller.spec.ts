import { Test, TestingModule } from '@nestjs/testing';
import { BoletoController } from '../boleto.controller';
import { CreateBoletoDto } from '../dto/create-boleto.dto';
import { BoletoService } from '../boleto.service';

describe('Cats Controller', () => {
  let controller: BoletoController;
  let service: BoletoService;
  const createDto: CreateBoletoDto = {
    barCode: 'Cat #1',
    amount: 100,
    expirationDate: Date.now().toString(),
  };

  const mockCat = {
    "_id": "623a09dc17f845477501e919",
    "barCode": "00198892600000141690000003268923003601646517",
    "amount": 20,
    "expirationDate": "2018-07-16T00:00:00.000Z",
    "__v": 0
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoletoController],
      providers: [
        {
          provide: BoletoService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                "barCode": "84670000001049902962022031547400000243349930",
                "amount": 20,
                "expirationDate": "2018-07-16T00:00:00.000Z",
                "__v": 0
            },
            {
              "barCode": "00198892600000141690000003268923003601646517",
              "amount": 20,
              "expirationDate": "2018-07-16T00:00:00.000Z",
              "__v": 0
            },
            ]),
            create: jest.fn().mockResolvedValue(createDto),
          },
        },
      ],
    }).compile();

    controller = module.get<BoletoController>(BoletoController);
    service = module.get<BoletoService>(BoletoService);
  });

  describe('create()', () => {
    it('should create a new cat', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockCat);

      await controller.create(createDto);
      expect(createSpy).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of cats', async () => {
      expect(controller.findOne('00190000090326892300436016465175889260000014169')).resolves.toEqual(
      {
        "barCode": "00198892600000141690000003268923003601646517",
        "amount": 20,
        "expirationDate": "2018-07-16T00:00:00.000Z",
        "__v": 0
      },
      );
      expect(service.findOne).toHaveBeenCalled();
    });
  });
});