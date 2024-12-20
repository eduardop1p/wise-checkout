/* eslint-disable @typescript-eslint/no-unused-vars */
import { twMerge } from 'tailwind-merge';

import { CircularProgress } from '@mui/material';

interface Props {
  className?: string;
}

export default function Loading({ className }: Props) {
  return (
    <div className='fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-[#00000066]'>
      <div className='flex flex-col items-center gap-4 rounded-lg bg-white px-10 py-5'>
        <CircularProgress size={40} />
        <span className='text-000000e6 text-sm font-normal'>
          Apagando, aguarde...
        </span>
      </div>
    </div>
  );
}
