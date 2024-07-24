import { Meta, StoryObj } from "@storybook/react";

import SectionContact, { ISectionContactProps } from ".";

interface StoryProps extends ISectionContactProps {
  children?: React.ReactNode;
}
const meta = {
  title: "Components/SectionContact",
  component: SectionContact,
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => (
  <SectionContact contact={[]} />
);

Normal.args = {};
