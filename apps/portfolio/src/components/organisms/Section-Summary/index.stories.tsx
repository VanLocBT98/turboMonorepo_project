import { Meta, StoryObj } from "@storybook/react";

import SectionSummary, { ISectionSummaryProps } from ".";

interface StoryProps extends ISectionSummaryProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionSummary",
  component: SectionSummary,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionSummary summary={[]} resume={""} socials={[]} />
);

Normal.args = {};
