import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"
import { Button } from "../Button";

function NavItem(){

   const {theme, handleTheme} = useContext(ThemeContext)
   console.log(theme);
  return (
      <>
        <Button onClick={handleTheme} label="Change Theme" size="desktop-tablet" state="default" type="secondary" />
      </>
  )
}

export default NavItem;