import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loading } from "./Loading";
const meta: Meta<typeof Loading> = { title: "Loading", component: Loading };

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
