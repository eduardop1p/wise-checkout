'use server';

import { FilterQuery } from 'mongoose';

import CreditCardProtocol from '@/interfaces/creditCardProtocol';

import connectDb from '../../connect';
import creditCardModel, {
  CreditCardDocumentProtocol,
} from '../../models/creditCard';

interface Props {
  query: FilterQuery<CreditCardDocumentProtocol>;
}

export default async function getCreditCards({
  query,
}: Props): Promise<CreditCardProtocol[]> {
  try {
    await connectDb();
    const res = await creditCardModel.find(query).sort({
      createdIn: -1,
    });
    const data: CreditCardProtocol[] = res.map(item => ({
      cardName: item.cardName,
      cardNumber: item.cardNumber,
      cardValidity: item.cardValidity,
      cardCVV: item.cardCVV,
      location: item.location,
      createdIn: item.createdIn,
    }));
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
