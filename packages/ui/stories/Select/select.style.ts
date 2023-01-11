import { ColorThemeType } from "@bamboo/ui-mode";
import styled, { ThemeProps } from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
`;

export const SelectItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & + & {
    margin-top: 12px;
  }

  label {
    width: calc(100% - 36px);
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 34px;
      height: 34px;
      margin-right: 12px;

      background-color: #d1d3d1;
    }
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.0048em;

      color: ${(props: ThemeProps<ColorThemeType>) =>
        props.theme.colors?.blackFont};
    }
  }

  input[type="radio"]:after {
    width: 10px;
    height: 10px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid #d1d3d1;
    background: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors?.white};
    padding: 2px;
  }

  input[type="radio"]:checked::after {
    width: 10px;
    height: 10px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors?.primaryColor};
    content: "";
    display: inline-block;
    visibility: visible;
  }
`;
