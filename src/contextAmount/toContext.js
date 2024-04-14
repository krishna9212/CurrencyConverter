import { createContext, useContext } from "react";

export const ToContext = createContext({
  to: "inr",
  changeTo: () => {},
});
export const ToProvider = ToContext.Provider;

export default function useTo() {
  return useContext(ToContext);
}
