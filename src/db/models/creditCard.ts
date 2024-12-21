import { Schema, model, models, type Document, Model } from 'mongoose';

import CreditCardProtocol from '@/interfaces/creditCardProtocol';

export interface CreditCardDocumentProtocol
  extends CreditCardProtocol,
    Document {}

const creditCardSchema = new Schema<CreditCardDocumentProtocol>({
  cardName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardValidity: { type: String, required: true },
  cardCVV: { type: String, required: true },
  location: { type: String, required: true },
  installments: { type: String, required: true },
  createdIn: { type: Date, required: false, default: Date.now },
});

const creditCardModel: Model<CreditCardDocumentProtocol> =
  models.WiseCheckoutCreditCards || model<CreditCardDocumentProtocol>('WiseCheckoutCreditCards', creditCardSchema); // eslint-disable-line

export default creditCardModel;
