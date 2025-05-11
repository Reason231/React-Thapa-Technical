import { createContext, useContext, useState } from "react";

export const ThemeCreate=createContext()

export const ThemeProvider=({children})=>{
  const [theme,setTheme]=useState("light")

  function themeToggle(){
    setTheme((prev) => prev == "light" ? "black" : "light")
  }

  return(
    <>
    <ThemeCreate.Provider value={{theme,themeToggle}} >
      {children}
    </ThemeCreate.Provider>
    
    </>
  )
}