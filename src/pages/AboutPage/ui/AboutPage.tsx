import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("aboutPage");
  return (
    <div data-testid="about-page">
      <div>{t("О нас")}</div>
    </div>
  );
}
