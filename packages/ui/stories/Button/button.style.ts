import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ColorType } from "./button.interface";
import { SizeType } from "../../interface/size.type";

export const ButtonBox = styled.div<{
  color: ColorType;
  disable: boolean;
  size: Exclude<SizeType, "md">;
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

const sizeStyle: Record<Exclude<SizeType, "md">, FlattenSimpleInterpolation> = {
  lg: css`
    width: 396px;
    height: 34px;
  `,
  sm: css`
    width: 64px;
    height: 32px;
  `,
};

const colorStyle = {
  primary: css`
    background: linear-gradient(99.09deg, #49e7ba 0%, #37dc81 100%);
    color: #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  `,
  cancel: css`
    color: #49e7ba;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
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
