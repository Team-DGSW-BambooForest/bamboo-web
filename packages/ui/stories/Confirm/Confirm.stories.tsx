import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Confirm } from "./Confirm";

export default {
  title: "ui/Confirm",
  component: Confirm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Common = Template.bind({});

Common.args = {
  close: undefined,
  finaly: () => {
    console.log("true");
  },
  text: {
    accept: "a",
    refuse: "b",
    title: "asdfa",
  },
};
