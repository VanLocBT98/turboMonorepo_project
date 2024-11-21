import { Meta, StoryObj } from "@storybook/react";

import Test, { ITestProps } from ".";

interface StoryProps extends ITestProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/Test",
  component: Test,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <Test>{children}</Test>
);

Normal.args = {};
