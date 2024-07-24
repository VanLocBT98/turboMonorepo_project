import { Meta, StoryObj } from "@storybook/react";

import CardGithub, { ICardGithubProps } from ".";

interface StoryProps extends ICardGithubProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/CardGithub",
  component: CardGithub,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <CardGithub title={""} desc={""} />
);

Normal.args = {};
