import styled from "styled-components";

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 18px;

  min-width: 432px;
  min-height: 466px;

  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  row-gap: 12px;
`;

export const WriteTopWrap = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: 18px;
`;

export const WriteTopText = styled.h1`
  font-size: 16px;
  color: #2f2f2f;
`;

export const WirteTopLine = styled.hr`
  width: 396px;

  background: #f2f2f2;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const WriteUserInfoWrap = styled.div`
  width: 80px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WriteUserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.0048em;

  color: #2f2f2f;
`;

export const WritePostInput = styled.textarea`
  width: 396px;
  height: 240px;

  border: none;
  outline: none;
`;

export const WriteImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 396px;
  min-height: 38px;

  border: 1px solid black;

  opacity: 0.3;
  border-radius: 10px;
  padding-left: 18px;
`;

export const WriteAddText = styled.p`
  font-size: 12px;

  color: #adadad;
`;

export const WriteAddImageWrap = styled.div`
  display: flex;
  column-gap: 8px;
  padding-right: 18px;
`;

export const WritePostForm = styled.form`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;
