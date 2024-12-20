'use client';

import React, {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface LoadingContextProtocol {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultState = true;

export const LoadingContext = createContext<LoadingContextProtocol>({
  isLoading: defaultState,
  setIsLoading: () => { }, // eslint-disable-line
});

export default function LoadingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(defaultState);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
