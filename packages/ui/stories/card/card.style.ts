import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SizeType } from "../../interface/size.type";

export const CardContainer = styled.div<{
  size: SizeType;
  hover: string;
}>`
  @media screen and (max-width: 1600px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  padding-top: 18px;
  padding-bottom: 18px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  ${({ size }) => sizeStyle[size]}

  &:hover {
    background: ${({ hover }) => hover};
  }
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    @media screen and (max-width: 1600px) {
      width: 540px;

      padding-left: 18px;
      padding-right: 18px;
    }
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
    @media screen and (max-width: 1600px) {
      width: 260px;
    }
    width: 280px;
    border-radius: 15px;
    padding-left: 24px;
    padding-right: 24px;
  `,
};
