import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BambooThemeProvider } from "@bamboo/styled-theme";
import { Button } from "./Button";

export default {
  title: "ui/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <BambooThemeProvider mode="light">
    <Button {...args} />
  </BambooThemeProvider>
);

export const Common = Template.bind({});
Common.args = {
  children: "abc",
  size: "sm",
  color: "primary",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "primary",
  size: "sm",
  color: "primary",
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: "cancel",
  size: "sm",
  color: "cancel",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  color: "primary",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  children: "Large",
  color: "primary",
  size: "sm",
};

// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Button } from "./Button";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Example/Button",
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
