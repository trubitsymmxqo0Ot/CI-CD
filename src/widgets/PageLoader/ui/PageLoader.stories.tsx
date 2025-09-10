import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
  title: "widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
  decorators: [StyleDecorator],
  argTypes: {
    theme: "light",
  },
} satisfies Meta<typeof PageLoader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const PageLoaderLight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const PageLoaderDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}