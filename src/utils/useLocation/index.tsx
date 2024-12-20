'use client';

import { useCallback, useEffect, useState } from 'react';

import getClientLocation from '@/functions/getClientLocation';

export default function useLocation() {
  const [clientLocation, setClientLocation] = useState('');

  const handleGetLocation = useCallback(async () => {
    const locationRes = await getClientLocation();
    const formatedLocation = locationRes
      ? `${locationRes.city}, ${locationRes.region} - ${locationRes.country}`
      : 'Indisponivel';
    setClientLocation(formatedLocation);
  }, []);

  useEffect(() => {
    handleGetLocation();
  }, [handleGetLocation]);

  return clientLocation;
}
