import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SizeType } from "../../interface/size.type";

export const CardContainer = styled.div<{
  size: SizeType;
}>`
  padding-top: 18px;
  padding-bottom: 18px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 580px;
    border-radius: 15px;
    padding-left: 24px;
    padding-right: 24px;
  `,
  md: css`
    width: 432px;
    border-radius: 10px;
    padding-left: 18px;
    padding-right: 18px;
  `,
  sm: css`
    width: 280px;
    border-radius: 15px;
    padding-left: 24px;
    padding-right: 24px;
  `,
};
