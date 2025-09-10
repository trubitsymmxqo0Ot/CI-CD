import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import AboutPage from "./AboutPage";
import { StoryObj, Meta } from "@storybook/react-webpack5";

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    decorators: [StyleDecorator]
} satisfies Meta<typeof AboutPage>
export default meta;
type Story = StoryObj<typeof meta>

export const About: Story = {
    args: {}
}