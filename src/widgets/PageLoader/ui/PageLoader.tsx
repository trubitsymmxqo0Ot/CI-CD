import { Loaders } from "@/shared/ui/Loaders/Loaders"
import styles from './PageLoader.module.scss';
export const PageLoader = () => {
    return (
        <div className={styles.body} data-testid="pageLoader">
            <Loaders/>
        </div>
    )
}