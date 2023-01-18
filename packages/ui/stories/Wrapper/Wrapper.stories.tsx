import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";

import { Wrapper } from "./Wrapper";

export default {
  title: "ui/Wrapper",
  component: Wrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <BambooThemeProvider mode="light">
    <Wrapper {...args}>
      <Button color="primary" size="sm">
        button
      </Button>
      <Button color="primary" size="sm">
        button
      </Button>
      <Button color="primary" size="sm">
        button
      </Button>
      <Button color="primary" size="sm">
        button
      </Button>
      <Button color="primary" size="sm">
        button
      </Button>
    </Wrapper>
  </BambooThemeProvider>
);

export const Common = Template.bind({});

Common.args = {
  align: "left",
  flex: true,
};
