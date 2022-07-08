import { useContext } from "react";
import { Contexts } from 'contexts/Contexts'

export const useDataUsers = () => {
  const context = useContext(Contexts);
  return context;
}
