import { atom } from "recoil";

export const writeUploadPostImageAtom = atom<string | null>({
  key: "write/writeUploadPostImageAtom",
  default: null,
});
