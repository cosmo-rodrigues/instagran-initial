import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    try {
      if (storageValue) {
        return JSON.parse(storageValue);
      } else {
        return initialState;
      }
    } catch (error) {
      console.log(error)
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
