import styled from "styled-components";

export const CardImg = styled.img`
  width: 42px;
  height: 42px;
`;

export const CardInfoBox = styled.div`
  width: 100%;
  min-height: 32px;
  margin-left: 12px;
`;

export const CardTitle = styled.p`
  @media screen and (max-width: 1600px) {
    font-size: 12px;
  }
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.0048em;

  color: #2f2f2f;
`;

export const CardInfoText = styled.p`
  @media screen and (max-width: 1600px) {
    font-size: 8px;
    line-height: 12px;
  }
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.0048em;
`;

export const Card4Box = styled.div`
  display: flex;
  column-gap: 10px;
`;
