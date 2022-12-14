import styled from "styled-components";

export const CofirmContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  background-color: #fff;

  width: 400px;
  height: 250px;
  border-radius: 10px;

  border: 1px solid black;
`;

export const ConfirmContent = styled.div`
  height: 180px;
`;

export const ConfirmBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
