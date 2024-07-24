import { Meta, StoryObj } from "@storybook/react";

import SectionExperience, { ISectionExperienceProps } from ".";

interface StoryProps extends ISectionExperienceProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionExperience",
  component: SectionExperience,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionExperience experiences={[]} />
);

Normal.args = {};
