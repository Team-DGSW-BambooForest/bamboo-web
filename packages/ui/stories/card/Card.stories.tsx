import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "ui/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <BambooThemeProvider mode="light">
    <Card {...args}>card</Card>
  </BambooThemeProvider>
);

export const Common = Template.bind({});

Common.args = {
  size: "md",
};

export const Small = Template.bind({});

Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "md",
};

export const Large = Template.bind({});

Large.args = {
  size: "lg",
};
