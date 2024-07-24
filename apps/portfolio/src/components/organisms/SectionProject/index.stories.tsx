import { Meta, StoryObj } from "@storybook/react";

import SectionProject, { ISectionProjectProps } from ".";

interface StoryProps extends ISectionProjectProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionProject",
  component: SectionProject,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionProject projects={[]} moreLink={""} />
);

Normal.args = {};
