import React, { PropsWithChildren } from "react";

export type MenuProps = { children?: React.ReactNode };

export type MenuItemProps = PropsWithChildren<{ action?: () => void }>;
