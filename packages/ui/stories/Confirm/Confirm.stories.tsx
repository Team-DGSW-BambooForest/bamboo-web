import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonWrapper } from "../Button/Button";
import Card from "../card/Card";

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
  <BambooThemeProvider mode="light">
    <Card size="md">
      <Confirm {...args}>
        <ButtonWrapper align="flex-end">
          <Button color="cancel" size="sm">
            취소
          </Button>
          <Button color="primary" size="sm">
            확인
          </Button>
        </ButtonWrapper>
      </Confirm>
    </Card>
  </BambooThemeProvider>
);

export const Common = Template.bind({});

Common.args = {
  close: undefined,
  text: "delete",
};
