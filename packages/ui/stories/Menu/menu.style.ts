import styled from "styled-components";

export const MenuToggleButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  :hover {
    background-color: #eee;
  }
`;
export const MenuList = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  transform: translate(0%, 100%);

  width: 174px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 4px;
`;
export const MenuItemStyle = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-left: 10px;
  & + & {
    border-top: 1px solid #f2f2f2;
  }
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
`;
