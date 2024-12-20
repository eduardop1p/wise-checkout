'use server';

import creditCardModel from '@/db/models/creditCard';
import CreditCardProtocol from '@/interfaces/creditCardProtocol';

import connectDb from '../../connect';

export default async function createCreditCard(
  body: Omit<CreditCardProtocol, 'createdIn'>
): Promise<string | null> {
  try {
    await connectDb();
    const creditCard = await creditCardModel.create(body);
    return String(creditCard._id);
  } catch (err) {
    console.log(err);
    return null;
  }
}
