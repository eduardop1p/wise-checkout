'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

import deleteCreditCards from '@/db/actions/creditCard/deleteCreditCards';
import CreditCardProtocol from '@/interfaces/creditCardProtocol';
import delay from '@/services/delay';

import Loading from '../loading';

interface Props {
  setStateCreditCards: Dispatch<SetStateAction<CreditCardProtocol[]>>;
}

export default function BtnClear({ setStateCreditCards }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isLoading) {
      htmlElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = 'auto';
    }
  }, [isLoading]);

  const handleClick = async () => {
    setIsLoading(true);
    const isDeletedCreditCards = await deleteCreditCards();
    delay(2000);
    if (isDeletedCreditCards) {
      setStateCreditCards([]);
    } else {
      alert('Ocorreu um erro ao apagar, tente novalmente.');
    }
  };

  return (
    <>
      {isLoading && <Loading className='h-14 w-14' />}
      <button
        type='button'
        className='fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#ededed]'
        onClick={handleClick}
        title='Apagar tudo'
      >
        <MdDelete size={28} className='!fill-red-500' />
      </button>
    </>
  );
}
