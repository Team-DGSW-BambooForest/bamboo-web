import React, { useCallback, useState } from "react";
import { MenuItemProps, MenuProps } from "./menu.interface";
import { MenuToggleButton, MenuList, MenuItemStyle } from "./menu.style";
import menuImg from "../assets/menu.png";

export const Menu = ({ children }: MenuProps) => {
  const [toggle, setToggle] = useState(false);
  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return (
    <>
      <MenuToggleButton onClick={changeToggle}>
        <img src={menuImg} alt="menu" />
        {toggle && <MenuList>{children}</MenuList>}
      </MenuToggleButton>
    </>
  );
};

export const MenuItem = ({ children, action }: MenuItemProps) => {
  return <MenuItemStyle onClick={action}>{children}</MenuItemStyle>;
};
