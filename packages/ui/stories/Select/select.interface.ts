import React from "react";

export interface ChangeActionType {
  changeAction?: (e: HTMLInputElement) => void;
}

export type itemType = {
  name: string;
  img: string | null;
};

export interface SelectProps extends ChangeActionType {
  items?: itemType[];
  currentProfile?: string;
}

export interface SelectItemProps extends ChangeActionType {
  value: itemType;
  currentProfile?: string;
}
