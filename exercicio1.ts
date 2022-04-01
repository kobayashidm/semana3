const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

debugger
const fazUmBigMac = (ingredientes: string[]): string => {
  let bigMac : string = ingredientes.reduce(meuBigMac);
  function meuBigMac(total :string , palavra: string)
  {
    return total+ ', '+ palavra;
  }
  console.log (bigMac);
  return bigMac;
};

fazUmBigMac(ingredientes);