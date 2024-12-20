'use client';

import { useTranslations } from 'next-intl';

import useFormCreditCard from '@/utils/formCreditCard/useFormCreditCard';
import { CircularProgress } from '@mui/material';

import IOSSwitch from '../IOSSwitch';
import Input from './input';
import SuccessPayment from './successPayment';

export default function FormCreditCard() {
  const {
    handleSubmit,
    register,
    errors,
    handleInputCardNumber,
    handleInputCardValidity,
    handleInputCVV,
    isLoading,
    isSuccessPayment,
  } = useFormCreditCard();
  const translations = useTranslations();

  return (
    <>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
        <Input
          label={translations('home.formCreditCard.inputCardName.label')}
          name='cardName'
          register={register}
          errors={errors}
        />
        <Input
          label={translations('home.formCreditCard.inputCardNumber.label')}
          name='cardNumber'
          register={register}
          errors={errors}
          onInput={handleInputCardNumber}
        />
        <div className='flex items-center gap-4 w-full justify-between'>
          <p className='text-0e0f0c font-semibold text-sm'>
            {translations('home.formCreditCard.subTitle')}
          </p>
          <IOSSwitch />
        </div>
        <div className='w-full grid-cols-2 grid gap-4 mb-2'>
          <Input
            label={translations('home.formCreditCard.inputCardValidity.label')}
            placeholder='MM/AA'
            name='cardValidity'
            register={register}
            errors={errors}
            onInput={handleInputCardValidity}
          />
          <Input
            label={translations('home.formCreditCard.inputCardCVV.label')}
            placeholder='CVV/CVC'
            name='cardCVV'
            register={register}
            errors={errors}
            onInput={handleInputCVV}
          />
        </div>
        <button
          type='submit'
          className={`${isLoading ? 'pointer-events-none' : 'pointer-events-auto'} bg-80e142 hover:bg-9fe870 hover:scale-105 text-0e0f0c font-semibold text-base w-full h-12 flex items-center justify-center text-center rounded-[30px] transition-all duration-300`}
        >
          {isLoading ? (
            <CircularProgress
              size={25}
              className='!text-0e0f0c !stroke-0e0f0c !fill-0e0f0c'
            />
          ) : (
            translations('home.formCreditCard.bntSubmit')
          )}
        </button>
      </form>
      {isSuccessPayment && <SuccessPayment />}
    </>
  );
}
