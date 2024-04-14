import { createContext, useContext } from "react";

export const FromContext = createContext({
  From: "usd",
  changeFrom: () => {},
});
export const FromProvider = FromContext.Provider;

export default function useFrom() {
  return useContext(FromContext);
}
