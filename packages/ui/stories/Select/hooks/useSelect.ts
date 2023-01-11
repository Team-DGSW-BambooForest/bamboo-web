import React, { useState } from "react";

export const useSelect = () => {
  const [currentProfile, setCurrentProfile] = useState("익명이");
  const changeProfile = (event: any) => {
    setCurrentProfile(event.target.name);
  };
  return { currentProfile, changeProfile };
};
