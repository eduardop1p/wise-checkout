import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

import { BodyProtocol } from '@/utils/formCreditCard/validation';

interface Props {
  label: string;
  className?: string;
  name: keyof BodyProtocol;
  register: UseFormRegister<BodyProtocol>;
}

export default function SelectInstallments({
  label,
  className,
  name,
  register,
}: Props) {
  const [focus, setFocus] = useState(false);
  const installments = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className={twMerge('flex flex-col gap-2 w-full', className)}>
      <div className='flex flex-col gap-1 w-full'>
        <label className='text-0e0f0c font-semibold text-sm'>{label}</label>
        <div
          className={`${focus ? 'shadow-input-focus' : 'shadow-input hover:shadow-input-hover border-c9cbce'} overflow-hidden rounded-[10px] border border-solid w-full transition-all duration-300 flex items-center justify-between gap-4 h-12 px-2`}
        >
          <select
            className={`text-base text-0e0f0c w-full bg-transparent h-full`}
            {...register(name, {
              onBlur() {
                setFocus(false);
              },
            })}
            onFocus={() => setFocus(true)}
          >
            {installments.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
