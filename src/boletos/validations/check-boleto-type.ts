export function checkBarCode(barCode: string){
    var res = barCode.replace(/\D/g, "");
    console.log(res.length);
    
    if(res.length < 47 || res.length > 48) {
      return {barcode: '', status: false};
    }
    
    if(res.length === 48) return GenerateConvenantCodeBar(barCode)
    else return GenerateTitleCodeBar(barCode)
}

export function GenerateTitleCodeBar(lineCode: string) {

  const barCodeValidator = lineCode[32];
  console.log('barCodeValidator: ', barCodeValidator)

  const expirationFactor = lineCode.substring(33, 37);
  console.log('expirationFactor: ', expirationFactor)

  const rawAmount = lineCode.substring(37, 47);
  console.log('rawAmount: ', rawAmount)

  console.log('rawAmount: ', rawAmount)

  const barCode = lineCode.substring(0, 4)
      .concat(
          barCodeValidator,
          expirationFactor,
          rawAmount,
          lineCode.substring(4, 9),
          lineCode.substring(10, 20),
          lineCode.substring(21, 31)
      );
  
  console.log('barcode: ', barCode)
  return {barcode: barCode, status: true};
}

export function GenerateConvenantCodeBar(lineCode: string) {
  const barCode = lineCode.substring(0, 11)
      .concat(
          lineCode.substring(12, 23),
          lineCode.substring(24, 35),
          lineCode.substring(36, 47)
      );

  console.log('barcode2: ', barCode)
  
  return {barcode: barCode, status: true};  
}