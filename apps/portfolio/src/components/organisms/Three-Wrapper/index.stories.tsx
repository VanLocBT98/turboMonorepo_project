import { Meta, StoryObj } from "@storybook/react";

import ThreeWrapper, { IThreeWrapperProps } from ".";

interface StoryProps extends IThreeWrapperProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/ThreeWrapper",
  component: ThreeWrapper,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <ThreeWrapper canvas={undefined} />
);

Normal.args = {};
