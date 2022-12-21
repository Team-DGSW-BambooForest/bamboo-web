import {
  KeyboardEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const useSearch = (
  suggest: (str: string) => void,
  request: (str: string) => void
) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const inputBlurRef = useRef<HTMLInputElement>(null) as MutableRefObject<any>;
  const [isEntered, setIsEntered] = useState(false);

  /**
   * 검색어가 바뀔 때 실행되는 함수
   */
  const changeSearchWord = useCallback((e: any) => {
    setSearchWord(e.target.value);
  }, []);

  const click = () => {
    setIsEntered(true);
  };
  /**
   * esc키가 눌렸을 때 리스트 삭제
   * enter키가 눌렸을 때 검색
   */
  const detectKey = useCallback(
    async (e: KeyboardEvent) => {
      if (!["Escape", "Enter"].includes(e.key)) {
        return;
      }
      setIsEntered(false);
      if (e.key === "Enter") {
        request(searchWord);
      }
      if (e.key === "Escape") {
        setSearchWord("");
      }
      setSuggestList([]);
      inputBlurRef.current.blur();
    },
    [request, searchWord]
  );

  const clickRequest = () => {
    setIsEntered(false);
    request(searchWord);
    setSuggestList([]);
    inputBlurRef.current.blur();
  };

  const updateData = useCallback(() => {
    /**
     * @todo 단어 변경 시 데이터 변경 로직 작성
     */

    suggest(searchWord);
    setSuggestList(
      new Array(10)
        .fill(0)
        .map((v) => searchWord[searchWord.length - 1].repeat(10))
    );
  }, [searchWord, suggest]);

  const chooseSuggest = async (str: string) => {
    setIsEntered(false);
    request(str);
    inputBlurRef.current.blur();
    setSuggestList([]);
    setSearchWord(str);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchWord && isEntered) updateData();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  return {
    suggestList,
    changeSearchWord,
    detectKey,
    inputBlurRef,
    chooseSuggest,
    searchWord,
    click,
    clickRequest,
  };
};
