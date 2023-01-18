import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { itemType, SelectItemProps, SelectProps } from "./select.interface";
import { SelectContainer, SelectItemContainer } from "./select.style";

export const Select = ({
  items,
  changeAction,
  currentProfile,
}: SelectProps) => {
  return (
    <SelectContainer>
      {items?.map((v: itemType) => (
        <SelectItem
          changeAction={changeAction}
          value={v}
          currentProfile={currentProfile}
        />
      ))}
    </SelectContainer>
  );
};

export const SelectItem = ({
  value,
  changeAction,
  currentProfile,
  style,
}: SelectItemProps) => {
  return (
    <SelectItemContainer style={style}>
      <label htmlFor={value.name}>
        <Avatar src={value.img || ""} alt="" size="sm" />
        <span>{value.name}</span>
      </label>
      <input
        type="radio"
        name="name"
        id={value.name}
        onClick={changeAction}
        value={value.name}
        checked={value.name === currentProfile ? true : false}
      />
    </SelectItemContainer>
  );
};
