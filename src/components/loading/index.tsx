'use client';

import { useTranslations } from 'next-intl';

import { HiLockClosed } from 'react-icons/hi';

import { twMerge } from 'tailwind-merge';

import { useLoadingContext } from '@/utils/loadingContext/useContext';

interface Props {
  className?: string;
}

export default function Loading({ className }: Props) {
  const { isLoading } = useLoadingContext();
  const translations = useTranslations();

  if (!isLoading) return null;

  return (
    <div
      className={twMerge(
        'w-full flex flex-col items-center justify-center h-screen bg-white fixed z-10 inset-0',
        className
      )}
    >
      <HiLockClosed size={100} className='fill-163300 an-scale' />
      <h2 className='text-163300 font-medium text-base text-center'>
        {translations('loading.title')}
      </h2>
    </div>
  );
}
