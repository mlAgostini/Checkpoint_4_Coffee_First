import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

export const ButtonContext = createContext();

export function ButtonProvider({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  const buttonContextValue = useMemo(
    () => ({
      isClicked,
      setIsClicked,
    }),
    [isClicked, setIsClicked]
  );

  return (
    <ButtonContext.Provider value={buttonContextValue}>
      {children}
    </ButtonContext.Provider>
  );
}

ButtonProvider.propTypes = {
  children: propTypes.shape({
    isClicked: propTypes.bool,
    setIsClicked: propTypes.bool,
  }).isRequired,
};
