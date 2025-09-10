import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { NotFoundPage } from "./NotFoundPage";
import { StoryObj, Meta } from "@storybook/react-webpack5";
import { Theme } from "@/app/providers/ThemeProviders";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    decorators: [StyleDecorator]
} satisfies Meta<typeof NotFoundPage>
export default meta;
type Story = StoryObj<typeof meta>

export const NotFoundPageLight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const NotFoundPageDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
