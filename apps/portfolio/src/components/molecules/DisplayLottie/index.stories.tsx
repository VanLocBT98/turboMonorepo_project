import { Meta, StoryObj } from "@storybook/react";

import DisplayLottie, { IDisplayLottieProps } from ".";

interface StoryProps extends IDisplayLottieProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/DisplayLottie",
  component: DisplayLottie,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => <DisplayLottie />;

Normal.args = {};
