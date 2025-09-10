import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
export enum ThemeColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ThemeColor;
  "data-testid"?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = ThemeColor.PRIMARY,
    "data-testid": dataTestId,
  } = props;
  return (
    <Link
      data-testid={dataTestId}
      to={to}
      className={classNames(styles.colorLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};
