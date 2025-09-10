import { Decorator } from "@storybook/react-webpack5";
import { Theme } from "@/app/providers/ThemeProviders";

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story/>
  </div>
);