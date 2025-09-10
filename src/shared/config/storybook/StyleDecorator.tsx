import "@/app/styles/variables/global.scss";
import "@/app/styles/theme/dark.scss";
import "@/app/styles/theme/light.scss";
import "@/app/styles/index.scss";
import "@/app/styles/reset.scss"

import { Decorator } from "@storybook/react-webpack5";

export const StyleDecorator: Decorator = (Story) => <Story />;
