import { createContext, useContext } from "react";
import usePersistedState from "../Hooks/usePersistedstate";


const FirstLaunchContext = createContext({});

export function useFirstLaunch(): any {
  return useContext(FirstLaunchContext);
}

/**
 * A function to check if user opens app for the first time
 */

function FirstLaunchContextProvider({ children }: any) {
  const [FirstLaunch, setFirstLaunch] = usePersistedState("FirstLaunch", true);

  const toggleFirstLaunch = () => {
    setFirstLaunch(!FirstLaunch ? true : false);
  };

  return (
    <FirstLaunchContext.Provider value={{ FirstLaunch, toggleFirstLaunch }}>
      {children}
    </FirstLaunchContext.Provider>
  );
}

export default FirstLaunchContextProvider;