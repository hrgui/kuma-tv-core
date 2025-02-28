import type { StoryObj, Meta } from "@storybook/react";
import Cell from "./Cell";
const meta: Meta<typeof Cell> = { title: "Cell", component: Cell };

export default meta;

type Story = StoryObj<typeof Cell>;

export const Default: Story = {};

export const KumaTheRock: Story = {
  args: {
    imageUrl: "https://placehold.co/528x297/000000/FFF",
    header1: "KUMA THE ROCK!",
    header2: "Sub | Dub",
    header3: "14+",
  },
};
