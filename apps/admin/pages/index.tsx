import { Search } from "ui";
import useSearch from "ui/stories/search/hooks/useSearch";

export default function Web() {
  const { changeSearchWord, suggestList, detectESC } = useSearch();
  return (
    <div>
      <Search
        changeSearchWord={changeSearchWord}
        suggestList={suggestList}
        detectESC={detectESC}
      />
    </div>
  );
}
