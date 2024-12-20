'use server';

import creditCardModel from '@/db/models/creditCard';
import CreditCardProtocol from '@/interfaces/creditCardProtocol';

import connectDb from '../../connect';

export default async function updateCreditCard(
  id: string,
  body: Partial<CreditCardProtocol>
) {
  try {
    await connectDb();
    await creditCardModel.findByIdAndUpdate(id, body, { new: true });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
