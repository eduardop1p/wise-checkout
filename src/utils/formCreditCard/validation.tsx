import { useTranslations } from 'next-intl';

import z from 'zod';

import validationCard from '@/services/validationCard';

export function useValidation() {
  const translations = useTranslations();

  return z.object({
    cardName: z
      .string()
      .trim()
      .min(1, translations('home.formCreditCard.inputCardName.error')),
    cardNumber: z
      .string()
      .trim()
      .refine(
        value => validationCard(value),
        translations('home.formCreditCard.inputCardNumber.error')
      ),
    cardValidity: z
      .string()
      .trim()
      .min(1, translations('home.formCreditCard.inputCardValidity.error')),
    cardCVV: z
      .string()
      .trim()
      .min(1, translations('home.formCreditCard.inputCardCVV.error')),
    installments: z.string().trim(),
  });
}

export type BodyProtocol = z.infer<ReturnType<typeof useValidation>>;
