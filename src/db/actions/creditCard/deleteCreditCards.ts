'use server';

import creditCardModel from '@/db/models/creditCard';

import connectDb from '../../connect';

export default async function deleteCreditCards() {
  try {
    await connectDb();
    await creditCardModel.deleteMany({});
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
