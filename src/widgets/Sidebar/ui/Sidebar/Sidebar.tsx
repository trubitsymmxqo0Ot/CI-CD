import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/index";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher/index";
import { useTranslation } from "react-i18next";
export const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  const [collapsed, setCollapsed] = useState(false);
  const onSidebarOpen = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        []
      )}
    >
      <section className={styles.body}>
        <h2 className={styles.title}>{t("Сайдбар")}</h2>
        <button
          className={styles.btn}
          onClick={onSidebarOpen}
          data-testid="openSidebar"
        >
          {collapsed ? t("Закрыть") : t("Открыть")}
        </button>
      </section>
      <section className={styles.switchers}>
        <ThemeSwitcher data-testid="toggleTheme"/>
        <LanguageSwitcher />
      </section>
    </div>
  );
};
