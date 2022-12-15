import React, { KeyboardEvent, useCallback, useEffect, useState } from "react";

const useSearch = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [suggestList, setSuggestList] = useState<string[]>([]);

  const changeSearchWord = useCallback((e: any) => {
    setSearchWord(e.target.value);
  }, []);

  const detectESC = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSuggestList([]);
    }
  }, []);

  const updateData = useCallback(() => {
    /**
     * @todo 단어 변경 시 데이터 변경 로직 작성
     */
    setSuggestList(
      new Array(10)
        .fill(0)
        .map((v) => searchWord[searchWord.length - 1].repeat(10))
    );
  }, [searchWord]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchWord) updateData();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  return { suggestList, changeSearchWord, detectESC };
};

export default useSearch;
