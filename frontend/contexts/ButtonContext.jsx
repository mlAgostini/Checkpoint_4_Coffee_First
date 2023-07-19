import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

export const ButtonContext = createContext();

export function ButtonProvider({ children }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleButton = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const buttonContextValue = useMemo(
    () => ({
      isButtonClicked,
      setIsButtonClicked,
      toggleButton,
    }),
    [isButtonClicked, setIsButtonClicked, toggleButton]
  );

  return (
    <ButtonContext.Provider value={buttonContextValue}>
      {children}
    </ButtonContext.Provider>
  );
}

ButtonProvider.propTypes = {
  children: propTypes.shape({
    isButtonClicked: propTypes.bool,
    setIsButtonClicked: propTypes.bool,
    toggleButton: propTypes.func,
  }).isRequired,
};
