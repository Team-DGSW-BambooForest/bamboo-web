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
