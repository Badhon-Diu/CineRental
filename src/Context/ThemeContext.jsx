import { createContext, useState } from "react";

export const Theme = createContext();
export default function ThemeContext({ children }) {
  

  const ThemeValue = {
    isdark,
    setisdark,
  };
  return <Theme.Provider value={ThemeValue}>{children}</Theme.Provider>;
}
