import React from "react";
import { AvartarProps } from "./avatar.interface";
import { AvatarStyle } from "./avatar.style";

export const Avatar = ({ alt, src, size = "sm", style }: AvartarProps) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <AvatarStyle src={src} alt={alt} size={size} style={style} />;
};
