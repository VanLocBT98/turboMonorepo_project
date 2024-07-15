import { Meta, StoryObj } from "@storybook/react";

import Header, { IHeaderProps } from ".";

interface StoryProps extends IHeaderProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <Header>{children}</Header>
);

Normal.args = {};
