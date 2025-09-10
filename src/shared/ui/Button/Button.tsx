import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum StylesButton {
  CLEAR = "clear",
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  toggleTheme?: () => void;
  theme?: StylesButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { toggleTheme, className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      onClick={toggleTheme}
      {...otherProps}
    >
      {children}
    </button>
  );
};
