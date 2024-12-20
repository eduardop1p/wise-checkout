import { useTranslations } from 'next-intl';

import FormCreditCard from '@/components/formCreditCard';
import Header from '@/components/header';
import Loading from '@/components/loading';

export default function Home() {
  const translations = useTranslations();

  return (
    <>
      <Header />
      <main className='w-full py-10 px-6 flex justify-center'>
        <div className='w-full flex flex-col max-w-[560px]'>
          <h1 className='text-0e0f0c font-semibold text-[26px] mb-3 leading-[1.3]'>
            {translations('home.title')}
          </h1>
          <p className='text-0e0f0c font-semibold text-sm mb-4'>
            {translations('home.subTitle')}
          </p>
          <FormCreditCard />
        </div>
      </main>
      <Loading />
    </>
  );
}
