import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./ButButton.module.scss";
import { useEffect, useState } from "react";

interface PageProps {
  mainClass?: string;
}
//Для тестов
export const BugButton = ({ mainClass }: PageProps) => {
  const { t } = useTranslation("global");
  const [error, setError] = useState(false);
  const handleClickErrorButton = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <div>
      <button
        onClick={handleClickErrorButton}
        className={classNames(styles[mainClass])}
      >
        {t("Вызвать ошибку")}
      </button>
    </div>
  );
};
