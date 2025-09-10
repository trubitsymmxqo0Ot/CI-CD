import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs'],
    decorators: [StyleDecorator]
} satisfies Meta<typeof LanguageSwitcher>
export default meta;
type Story = StoryObj<typeof meta>

export const LanguageSwitcherLight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const LanguageSwitcherDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}