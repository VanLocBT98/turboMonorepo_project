import { Meta, StoryObj } from "@storybook/react";

import MouseBlob, { IMouseBlobProps } from ".";

interface StoryProps extends IMouseBlobProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/MouseBlob",
  component: MouseBlob,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <MouseBlob>{children}</MouseBlob>
);

Normal.args = {};
