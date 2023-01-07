import styled, {
  css,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";
import { ColorType, SizeType } from "./button.interface";
import { ColorThemeType } from "@bamboo/ui-mode";

export const ButtonBox = styled.div<{
  color: ColorType;
  disable: boolean;
  size: SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  border-radius: 10px;

  cursor: ${({ disable = false }) => (disable ? "not-allowed" : "pointer")};

  ${({ color }) => colorStyle[color]}
  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 396px;
    height: 34px;
  `,
  sm: css`
    width: 64px;
    height: 32px;
  `,
};

const colorStyle: Record<
  ColorType,
  FlattenInterpolation<ThemeProps<ColorThemeType>>
> = {
  primary: css`
    background: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors?.primaryColor};
    color: ${(props: ThemeProps<ColorThemeType>) => props.theme.colors?.white};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  `,
  cancel: css`
    background: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors?.white};
    color: ${(props: ThemeProps<ColorThemeType>) => props.theme.colors?.aqua};
  `,
};

export const ButtonWrapperStyle = styled.div<{
  align: "flex-end" | "flex-start" | "center";
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: ${({ align }) => align};
`;
