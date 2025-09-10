import { useTranslation } from "react-i18next"
import styles from './NotFoundPage.module.scss';
export const NotFoundPage = () => {
    const { t } = useTranslation("global");
    return (
        <div className={styles.body}>
            <div className={styles.title}>{t("Страница не найдена")}</div>
        </div>
    )
}