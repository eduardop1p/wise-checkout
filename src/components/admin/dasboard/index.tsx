'use client';

import { useState } from 'react';

import CreditCardProtocol from '@/interfaces/creditCardProtocol';
import formateDate from '@/services/formatDate';

import BtnClear from './btnClear';

interface Props {
  creditCards: CreditCardProtocol[];
}

export default function AdminDasboard({ creditCards }: Props) {
  const [stateCreditCards, setStateCreditCards] = useState(creditCards);

  return (
    <>
      <div className='flex w-full flex-col'>
        <div className='flex h-[44px] w-full items-center justify-center bg-black'>
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Id
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Nome cartão
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Número cartão
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Validade cartão
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            CVV/CVC cartão
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Parcelas
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Localização
          </div>
          <div className='h-full w-[1px] bg-gray-300' />
          <div className='w-full px-2 text-center text-sm font-medium uppercase text-white'>
            Horário
          </div>
        </div>
        {stateCreditCards.map((item, i) => (
          <div
            key={i}
            className='flex h-[44px] w-full items-center justify-center border-x border-b border-solid border-black bg-transparent bg-white'
          >
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {stateCreditCards.length - i}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.cardName}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.cardNumber}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.cardValidity}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.cardCVV}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.installments ?? '-'}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {item.location}
            </div>
            <div className='h-full w-[1px] bg-black' />
            <div className='line-clamp-2 w-full text-ellipsis px-2 text-center text-sm font-medium text-black'>
              {formateDate(item.createdIn)}
            </div>
          </div>
        ))}
      </div>

      {stateCreditCards.length > 0 && (
        <BtnClear setStateCreditCards={setStateCreditCards} />
      )}
    </>
  );
}
