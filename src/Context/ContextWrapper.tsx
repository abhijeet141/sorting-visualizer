import { createContext } from "react";

export const ArraySizeContext = createContext(0);

type ContextProps = {
  children: React.ReactNode;
  arraySize: number;
};

export default function ContextWrapper({ children, arraySize }: ContextProps) {
  return (
    <ArraySizeContext.Provider value={arraySize}>
      {children}
    </ArraySizeContext.Provider>
  );
}
