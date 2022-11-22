import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "../Modal/Modal";

export default {
  title: "ui/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Common = Template.bind({});
Common.args = {
  isOpened: true,
  onClose: () => {},
  children: "test",
};
