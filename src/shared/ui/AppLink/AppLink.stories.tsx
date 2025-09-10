import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { AppLink, ThemeColor } from "./AppLink";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProviders";

const meta = {
    title: 'shared/ui/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    decorators: [StyleDecorator, RouterDecorator],
    args: {
        children: 'Text',
        to: '/',
    }
} satisfies Meta<typeof AppLink>;
export default meta;
type Story = StoryObj<typeof meta>

export const LinkPrimaryLight: Story = {
    args: {
        theme: ThemeColor.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const LinkSecondaryLight: Story = {
    args: {
        theme: ThemeColor.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const LinkPrimaryDark: Story = {
    args: {
        theme: ThemeColor.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const LinkSecondaryDark: Story = {
    args: {
        theme: ThemeColor.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
