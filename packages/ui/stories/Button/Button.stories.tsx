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
