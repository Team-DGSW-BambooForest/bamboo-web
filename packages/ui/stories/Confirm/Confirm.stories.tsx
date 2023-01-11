import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonWrapper } from "../Button/Button";
import { Card } from "../card/Card";
import { Select } from "../Select/Select";

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
            삭제
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

export const CofirmWrite = Template.bind({});

CofirmWrite.args = {
  text: "write",
};

export const ConfirmDelete = Template.bind({});

ConfirmDelete.args = {
  text: "delete",
};

export const ConfirmComment = Template.bind({});

ConfirmComment.args = {
  text: "comment",
};

const CHOOSE_ITEMS = [
  { name: "강성훈", img: null },
  { name: "익명이", img: null },
];
const ChooseTemplate: ComponentStory<typeof Confirm> = (args) => (
  <BambooThemeProvider mode="light">
    <Card size="md">
      <Confirm {...args}>
        <Select items={CHOOSE_ITEMS} current="강성훈" />
      </Confirm>
    </Card>
  </BambooThemeProvider>
);

export const ConfirmChoose = ChooseTemplate.bind({});

ConfirmChoose.args = {
  text: "choose",
};
