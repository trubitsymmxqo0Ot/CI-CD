import { useTranslation } from "react-i18next";
import "./PageError.scss";
export const PageError = () => {
  const { t } = useTranslation("global");
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className="body">
      <h2 className="title">{t("К сожалению, произошла ошибка")} 😒</h2>
      <button onClick={reloadPage} className="update_button" data-testid="resetBtn">
        {t("Обновить страницу")}
      </button>
    </div>
  );
};
