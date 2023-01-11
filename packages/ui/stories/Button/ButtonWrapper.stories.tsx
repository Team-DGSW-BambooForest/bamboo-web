import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BambooThemeProvider } from "@bamboo/styled-theme";
import { Button, ButtonWrapper } from "./Button";

export default {
  title: "ui/ButtonWrapper",
  component: ButtonWrapper,
  argTypes: {},
} as ComponentMeta<typeof ButtonWrapper>;

// Wrapper

const WrapperTemplate: ComponentStory<typeof ButtonWrapper> = (args) => (
  <BambooThemeProvider mode="light">
    <ButtonWrapper {...args}>
      <Button size="sm" color="primary">
        button
      </Button>
      <Button size="sm" color="primary">
        button
      </Button>
    </ButtonWrapper>
  </BambooThemeProvider>
);

export const Common = WrapperTemplate.bind({});
Common.args = {
  align: "flex-start",
};

export const LeftAlign = WrapperTemplate.bind({});

LeftAlign.args = {
  align: "flex-start",
};

export const RightAlign = WrapperTemplate.bind({});

RightAlign.args = {
  align: "flex-end",
};

export const CenterAlign = WrapperTemplate.bind({});

CenterAlign.args = {
  align: "center",
};
