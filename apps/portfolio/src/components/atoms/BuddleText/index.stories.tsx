import { Meta, StoryObj } from "@storybook/react";

import BuddleText, { IBuddleTextProps } from ".";

interface StoryProps extends IBuddleTextProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/BuddleText",
  component: BuddleText,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => <BuddleText />;

Normal.args = {};
