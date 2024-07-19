import { Meta, StoryObj } from "@storybook/react";

import SectionSkills, { ISectionSkillsProps } from ".";

interface StoryProps extends ISectionSkillsProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionSkills",
  component: SectionSkills,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionSkills techStacks={[]} />
);

Normal.args = {};
