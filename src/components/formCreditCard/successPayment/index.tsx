'use client';

import { useTranslations } from 'next-intl';

import { PiClockClockwise } from 'react-icons/pi';

import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export default function SuccessPayment({ className }: Props) {
  const translations = useTranslations();

  return (
    <div
      className={twMerge(
        'w-full flex flex-col items-center justify-center h-screen bg-white fixed z-10 inset-0',
        className
      )}
    >
      <PiClockClockwise size={100} className='fill-163300' />
      <h2 className='text-163300 font-medium text-base text-center max-w-[200px] w-full'>
        {translations('home.formCreditCard.msgSuccess')}
      </h2>
    </div>
  );
}
