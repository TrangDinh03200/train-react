import { createContext, useContext, useReducer } from "react";
import { systemReducer, SYSTEM_INITIAL_STATE } from "../store/reducers";
import logger from "../utils/logger";

const SystemContext = createContext(SYSTEM_INITIAL_STATE);

export const SystemContextProvider = ({ children }) => {
  const [systemState, dispatch] = useReducer(logger(systemReducer), SYSTEM_INITIAL_STATE);
  const value = {
    state: systemState,
    dispatch,
  };

  return <SystemContext.Provider value={value}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => useContext(SystemContext);

export default useSystemContext;
