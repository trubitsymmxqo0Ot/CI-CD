import { Theme, useTheme } from "@/app/providers/ThemeProviders/index";
import { Button, StylesButton } from "@/shared/ui/Button/Button";
import Light from "@/shared/assets/icons/theme-light.svg";
import Dark from "@/shared/assets/icons/theme-dark.svg";


export const ThemeSwitcher= () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button toggleTheme={toggleTheme} theme={StylesButton.CLEAR} data-testid="theme">
      {theme === Theme.LIGHT ? <Light data-testid="themeLight"/> : <Dark data-testid="themeDark"/>}
    </Button>
  );
};
