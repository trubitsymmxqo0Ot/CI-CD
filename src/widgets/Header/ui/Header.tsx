import styles from "./Header.module.scss";
import { AppLink, ThemeColor } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { BugButton } from "@/app/providers/ErrorBoundary/index";
export const Header = () => {
  const { t } = useTranslation("header");
  return (
    <>
      <div className={styles.container} data-testid="header">
        <AppLink
          data-testid="linkAbout"
          theme={ThemeColor.PRIMARY}
          to="/about"
          className="link"
        >
          {t("О нас")}
        </AppLink>
        <AppLink
          data-testid="linkMain"
          theme={ThemeColor.PRIMARY}
          to="/"
          className="link"
        >
          {t("На главную")}
        </AppLink>
        <BugButton mainClass="button" />
      </div>
    </>
  );
};
