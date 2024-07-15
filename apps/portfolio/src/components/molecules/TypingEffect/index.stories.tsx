import { Meta, StoryObj } from "@storybook/react";

import TypingEffect, { ITypingEffectProps } from ".";

interface StoryProps extends ITypingEffectProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/TypingEffect",
  component: TypingEffect,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <TypingEffect>{children}</TypingEffect>
);

Normal.args = {};
