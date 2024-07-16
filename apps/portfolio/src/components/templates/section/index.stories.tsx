import { Meta, StoryObj } from "@storybook/react";

import Section, { SectionUIProps } from ".";

interface StoryProps extends SectionUIProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => <Section id={""} />;

Normal.args = {};
