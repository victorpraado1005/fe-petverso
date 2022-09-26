import cobasi from '../../assets/images/cobasi_logo.png';

import petlove from '../../assets/images/petlove_logo.png';

import petz from '../../assets/images/petz_logo.jpg';

export const lojas = [
  {
    nome: 'Cobasi',
    foto: cobasi,
    cupons: [
      {
        nomeCupom: 'Cobasi 10',
        descricaoCupom: '10% de desconto na sua compra!',
        desconto: 10,
      },
      {
        nomeCupom: 'Cobasi 20',
        descricaoCupom: '20% de desconto na sua compra!',
        desconto: 20,
      },
      {
        nomeCupom: 'Cobasi 5',
        descricaoCupom: '5% de desconto na sua compra!',
        desconto: 5,
      },
    ],
  },
  {
    nome: 'Petz',
    foto: petz,
    cupons: [],
  },
  {
    nome: 'PetLove - Cambuci',
    foto: petlove,
    cupons: [
      {
        nomeCupom: 'PetMais 5',
        descricaoCupom: '5% de desconto na sua compra!',
        desconto: 5,
      },
      {
        nomeCupom: 'PetMais 15',
        descricaoCupom: '15% de desconto na sua compra!',
        desconto: 15,
      },
    ],
  },
  {
    nome: 'Cobasi - Zona Leste',
    foto: cobasi,
    cupons: [
      {
        nomeCupom: 'Cobasi 20',
        descricaoCupom: '20% de desconto na sua compra!',
        desconto: 20,
      },
    ],
  },
  {
    nome: 'PetLove',
    foto: petlove,
    cupons: [],
  },
  {
    nome: 'Petz - Interlagos',
    foto: petz,
    cupons: [
      {
        nomeCupom: 'PetCão 5',
        descricaoCupom: '5% de desconto na sua compra!',
        desconto: 5,
      },
      {
        nomeCupom: 'PetCão 10',
        descricaoCupom: '10% de desconto na sua compra!',
        desconto: 10,
      },
    ],
  },
];
