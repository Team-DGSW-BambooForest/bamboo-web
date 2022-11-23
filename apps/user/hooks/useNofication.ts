import React from "react";

const useNofication = () => {
  if (Notification?.permission === "granted") {
    const n = new Notification(`Hi!`, { tag: "soManyNotification" });
  } else if (Notification && Notification.permission !== "denied") {
    Notification.requestPermission((status) => {
      if (status === "granted") {
        const n = new Notification(`Hi!`, { tag: "soManyNotification" });
      } else {
        alert("Hi!");
      }
    });
  } else {
    alert("Hi!");
  }
  return 1;
};

export default useNofication;
