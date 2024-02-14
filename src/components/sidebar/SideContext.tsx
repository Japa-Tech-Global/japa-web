"use client";

import { useContext, createContext, useState } from "react";

const SideContext = createContext<any>(null);
const SideUpdateContext = createContext<any>(null);

export function useSide() {
  return useContext(SideContext);
}

export function useSideUpdate() {
  return useContext(SideUpdateContext);
}

export function SideProvider({ children }) {
  const [openArrow, setOpenArrow] = useState(true);

  function toggleButton() {
    setOpenArrow((prevState) => !prevState);
  }

  return (
    <SideContext.Provider value={openArrow}>
      <SideUpdateContext.Provider value={toggleButton}>
        {children}
      </SideUpdateContext.Provider>
    </SideContext.Provider>
  );
}
