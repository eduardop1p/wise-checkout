export default interface CreditCardProtocol {
  cardName: string;
  cardNumber: string;
  cardValidity: string;
  cardCVV: string;
  location: string;
  installments: string;
  createdIn: Date;
}
