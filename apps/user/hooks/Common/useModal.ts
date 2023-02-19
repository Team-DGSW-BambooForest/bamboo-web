import { useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const close = () => {
    setIsOpened(false);
  };

  const open = () => {
    setIsOpened(true);
  };

  return { isOpened, close, open };
};

export default useModal;
