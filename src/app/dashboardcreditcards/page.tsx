export const dynamic = 'force-dynamic';

import AdminDasboard from '@/components/admin/dasboard';
import getCreditCards from '@/db/actions/creditCard/getCreditCards';

export default async function Page() {
  const creditCards = await getCreditCards({ query: {} });

  return (
    <>
      <header className='flex h-[60px] w-full items-center bg-black px-4'>
        <h1 className='mx-auto text-center text-lg font-normal uppercase text-white'>
          PAINEL
        </h1>
      </header>
      <main className='flex min-h-screen w-full flex-col gap-3 bg-white p-3'>
        <AdminDasboard creditCards={creditCards} />
      </main>
    </>
  );
}
