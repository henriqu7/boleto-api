export class CreateBoletoDto {
    readonly barCode: string;
    readonly amount: number;
    readonly expirationDate: Date;
  }