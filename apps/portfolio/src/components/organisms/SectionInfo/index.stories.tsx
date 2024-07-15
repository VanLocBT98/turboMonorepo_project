import { Meta, StoryObj } from "@storybook/react";

import SectionInfo, { ISectionInfoProps } from ".";

interface StoryProps extends ISectionInfoProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionInfo",
  component: SectionInfo,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionInfo>{children}</SectionInfo>
);

Normal.args = {};
