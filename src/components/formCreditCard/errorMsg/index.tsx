import { ReactNode } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

export default function ErrorMsg({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center gap-1'>
      <IoMdCloseCircle size={18} className='fill-a8200d' />
      <span className='text-sm text-a8200d'>{children}</span>
    </div>
  );
}
