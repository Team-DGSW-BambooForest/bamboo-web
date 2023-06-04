import "styled-components";

declare module "styled-components" {
  export type ColorThemeType = {
    colors: {
      readonly white: string;
      readonly black: string;
      readonly darkGray: string;
      readonly gray: string;
      readonly lightGray: string;
      readonly primaryColor: string;
      readonly aqua: string;
      readonly green: string;
      readonly blackFont: string;
    };
  };
}
