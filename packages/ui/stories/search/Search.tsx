import { KeyboardEventHandler } from "react";

type SearchType = {
  changeSearchWord: (e: any) => void;
  suggestList: string[];
  detectESC: KeyboardEventHandler<HTMLInputElement>;
};

export const Search = ({
  changeSearchWord,
  suggestList,
  detectESC,
}: SearchType) => {
  return (
    <div>
      <input type="text" onChange={changeSearchWord} onKeyDown={detectESC} />
      {suggestList.map((v: string, idx: number) => (
        <div key={idx}>{v}</div>
      ))}
    </div>
  );
};
