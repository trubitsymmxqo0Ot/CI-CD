import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from 'storybook/test';
import { Button, StylesButton } from "./Button";
import {StyleDecorator} from "@/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [StyleDecorator],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Clear with light theme',
    theme: StylesButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}
export const Outline: Story = {
  args: {
    children: "Outline with light theme",
    theme: StylesButton.OUTLINE,
    className: 'outline',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const ClearDark: Story = {
  args: {
    children: "Clear with dark theme",
    theme: StylesButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlineDark: Story = {
  args: {
    children: "Outline with dark theme",
    theme: StylesButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
