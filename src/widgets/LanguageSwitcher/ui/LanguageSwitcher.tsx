import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation("sidebar");
  const changleLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  };
  return <Button onClick={changleLanguage} data-testid="languageButton">{t("Язык")}</Button>;
};
