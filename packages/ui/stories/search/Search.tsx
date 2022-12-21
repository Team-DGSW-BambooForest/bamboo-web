import { memo } from "react";
import { useSearch } from "./hooks/useSearch";

type SearchType = {
  suggest: (str: string) => void;
  request: (str: string) => void;
};

// eslint-disable-next-line react/display-name
export const Search = memo(({ request, suggest }: SearchType) => {
  const {
    changeSearchWord,
    suggestList,
    detectKey,
    inputBlurRef,
    chooseSuggest,
    searchWord,
    click,
    clickRequest,
  } = useSearch(suggest, request);

  return (
    <div>
      <input
        type="text"
        onChange={changeSearchWord}
        onKeyDown={detectKey}
        ref={inputBlurRef}
        value={searchWord}
        onClick={click}
      />
      <p onClick={clickRequest}>검색</p>
      {suggestList.map((v: string, idx: number) => (
        <div key={idx} onClick={() => chooseSuggest(v)}>
          {v}
        </div>
      ))}
    </div>
  );
});
