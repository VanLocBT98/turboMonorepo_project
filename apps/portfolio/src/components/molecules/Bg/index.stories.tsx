import { Meta, StoryObj } from "@storybook/react";

import Bg from ".";

interface StoryProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/Bg",
  component: Bg,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => <Bg />;

Normal.args = {};
