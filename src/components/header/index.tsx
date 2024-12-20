import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full p-6 border-b border-b-0e0f0c1f border-solid relative z-20'>
      <div className='max-w-[1160px] w-full mx-auto'>
        <Image src='/assets/svgs/logo.svg' alt='logo' width={106} height={24} />
      </div>
    </header>
  );
}
