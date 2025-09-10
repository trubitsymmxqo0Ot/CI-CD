import { useTranslation } from "react-i18next";
import styles from './MainPage.module.scss';
export default function MainPage() {
  const { t } = useTranslation("mainPage");
  return (
    <div data-testid="main-page" className={styles.body}>
      <div>{t("Главная страница")}</div>
    </div>
  );
}
