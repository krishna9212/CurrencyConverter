import { useContext, createContext } from "react";

export const Amount = createContext({
  Amt: 1,
  setAmt: () => {},
});

export const AmountProvider = Amount.Provider;

export default function useAmt() {
  return useContext(Amount);
}
