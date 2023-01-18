import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { AlignType } from "../../interface/align.type";
import { WrapperProps } from "./wrapper.interface";

export const WrapperStyle = styled.div<WrapperProps>`
  ${({ relative }) => relative && relativeStyle}
  ${({ flex }) => flex && flexStyle}
  ${({ align }) => align && alignStyle[align]}
`;

const relativeStyle = css`
  position: relative;
`;

const flexStyle = css`
  display: flex;
  align-items: center;
`;

const alignStyle: Record<AlignType, FlattenSimpleInterpolation> = {
  left: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
  `,
};
