import styled from "styled-components";

export const AdminHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminHeaderLeftSection = styled.div`
  display: flex;
`;

export const AdminHeaderMidSection = styled.div`
  width: 532px;
  height: 100%;

  display: flex;
`;

export const AdminHeaderMidLeftSection = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminHeaderMidRightSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminHeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 18px;
  padding-left: 18px;

  width: 208px;
  height: 34px;
  background: #f3f4f7;
  border-radius: 18px;
`;

export const AdminHeaderSearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 4px;

  background: none;
  border: none;
  outline: none;
`;

export const HeaderLogoutText = styled.span`
  font-size: 15px;
  color: #49e7ba;
  cursor: pointer;

  margin-right: 56px;
`;
