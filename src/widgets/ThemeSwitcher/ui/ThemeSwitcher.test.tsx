import { ThemeProvider } from "@/app/providers/ThemeProviders";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Theme test", () => {
  test("Theme in the document", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId("theme")).toBeInTheDocument();
  });
  test("Toggle theme", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme'));
    expect(screen.getByTestId("themeDark")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme'));
    expect(screen.getByTestId('themeLight')).toBeInTheDocument();
  });
});
