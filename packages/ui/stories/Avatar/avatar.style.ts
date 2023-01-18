import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SizeType } from "../../interface/size.type";

export const AvatarStyle = styled.img<{ size: SizeType }>`
  border-radius: 50%;
  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 100px;
    height: 100px;
  `,
  md: css`
    width: 48px;
    height: 48px;
  `,
  sm: css`
    width: 34px;
    height: 34px;
  `,
};
