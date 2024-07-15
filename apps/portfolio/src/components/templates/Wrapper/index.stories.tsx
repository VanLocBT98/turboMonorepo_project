import { Meta, StoryObj } from "@storybook/react";

import Wrapper, { IWrapperProps } from ".";

interface StoryProps extends IWrapperProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <Wrapper>{children}</Wrapper>
);

Normal.args = {};
