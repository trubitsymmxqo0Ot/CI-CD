import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { PageError } from "./PageError";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    decorators: [StyleDecorator],
} satisfies Meta<typeof PageError>
export default meta;
type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const PageErrorDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}