import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "./Search";

export default {
  title: "ui/search",
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Common = Template.bind({});

Common.args = {
  detectESC: () => {},
  changeSearchWord: () => {},
  suggestList: [],
};
