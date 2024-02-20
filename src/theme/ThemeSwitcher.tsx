import React, { useContext } from "react";
import { Icon, Checkbox } from "semantic-ui-react";
import { ThemeContext } from "../context/theme-context";
import { Input } from "@chakra-ui/react";

interface Props {}

const ThemeSwitcher: React.FC<Props> = (): JSX.Element => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center" }}>        
      <Icon
        name="sun outline"
        style={{ position: "relative", top: "-5px", left: "-5px" }}
      />
      <Checkbox onChange={toggleTheme} toggle checked={theme === "dark"} />
      <Icon
        name="moon outline"
        style={{ position: "relative", top: "-5px", left: "10px" }}
      />
    </div>
  );
};

export default ThemeSwitcher;