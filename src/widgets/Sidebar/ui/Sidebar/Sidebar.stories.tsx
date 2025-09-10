import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [StyleDecorator],
} satisfies Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}