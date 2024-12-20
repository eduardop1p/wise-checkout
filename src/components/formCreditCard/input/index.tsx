import { FormEventHandler, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BiCreditCard } from 'react-icons/bi';
import { MdOutlineCreditCard } from 'react-icons/md';

import { twMerge } from 'tailwind-merge';

import { BodyProtocol } from '@/utils/formCreditCard/validation';

import ErrorMsg from '../errorMsg';

interface Props {
  label: string;
  placeholder?: string;
  className?: string;
  name: keyof BodyProtocol;
  errors: FieldErrors<BodyProtocol>;
  register: UseFormRegister<BodyProtocol>;
  onInput?: FormEventHandler<HTMLInputElement>;
}

export default function Input({
  label,
  placeholder,
  className,
  name,
  errors,
  register,
  onInput,
}: Props) {
  const [focus, setFocus] = useState(false);
  const error = errors[name];

  return (
    <div className={twMerge('flex flex-col gap-2 w-full', className)}>
      <div className='flex flex-col gap-1 w-full'>
        <label className='text-0e0f0c font-semibold text-sm'>{label}</label>
        <div
          className={`${error ? (focus ? 'shadow-input-error-focus' : 'shadow-input-error border-e74848 ') : focus ? 'shadow-input-focus' : 'shadow-input hover:shadow-input-hover border-c9cbce'} overflow-hidden rounded-[10px] border border-solid w-full transition-all duration-300 flex items-center justify-between gap-4 px-4 py-3`}
        >
          <input
            type='text'
            className={`text-base text-0e0f0c w-full`}
            placeholder={placeholder}
            {...register(name, {
              onBlur() {
                setFocus(false);
              },
            })}
            onInput={onInput}
            onFocus={() => setFocus(true)}
          />
          {name === 'cardNumber' && (
            <MdOutlineCreditCard
              size={25}
              className='fill-gray-600 text-gray-600 flex-none'
            />
          )}
          {name === 'cardCVV' && (
            <BiCreditCard
              size={25}
              className='fill-gray-600 text-gray-600 flex-none'
            />
          )}
        </div>
      </div>
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </div>
  );
}
