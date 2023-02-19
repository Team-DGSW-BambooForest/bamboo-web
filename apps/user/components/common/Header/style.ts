import styled from "styled-components";

export const HeaderStyle = styled.div`
  /* position */
  position: fixed;
  top: 0;
  left: 0;

  /* size */
  width: 100%;
  height: 80px;

  /* color */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
`;

export const HeaderLeftSection = styled.div`
  display: flex;
`;

export const HeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 18px;
  padding-left: 18px;

  width: 208px;
  height: 34px;
  background: #f3f4f7;
  border-radius: 18px;
`;

export const HeaderSeacrhInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 4px;

  background: none;
  border: none;
  outline: none;
`;

export const HeaderLogoutText = styled.p`
  font-size: 15px;
  color: #49e7ba;
  cursor: pointer;

  margin-right: 56px;
`;
