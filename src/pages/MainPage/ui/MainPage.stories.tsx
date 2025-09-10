import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import MainPage from "./MainPage";
import { StoryObj, Meta } from "@storybook/react-webpack5";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    decorators: [StyleDecorator],
} satisfies Meta<typeof MainPage>
export default meta;
type Story = StoryObj<typeof meta>

export const Main: Story = {
    args: {}
}

