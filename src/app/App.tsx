import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/widgets/Header/index";
import { AppRouter } from "@/app/providers/routes/index";
import { Sidebar } from "@/widgets/Sidebar";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className={classNames("app black", {}, [theme])}
      data-testid="appLayout"
    >
      <Header />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
