import { createContext, useContext, useReducer, useRef, useState } from "react";
import { buildActions } from "./build-actions";
import { CounterContext } from "./context";
import { reducer } from "./reducer";

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <CounterContext.Provider value={[state, actions.current]}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (typeof context === "undefined") {
    throw new Error(
      "You have to use useCounterContext inside <CounterContextProvider />"
    );
  }

  return [...context];
};
