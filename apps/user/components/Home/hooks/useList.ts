import { useRef } from "react";
import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../../queries/Post/post.query";
import { PostDataType, PostResponse } from "../../../types/Post/Post.type";

const useList = () => {
  const { mutate } = useGetPostsQuery();
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [itemLists, setItemLists] = useState<PostDataType[]>([]);
  const pageRef = useRef(1);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    mutate(pageRef.current, {
      onSuccess: (res: PostResponse) => {
        setItemLists((prev) => [...prev, ...res.list]);
        pageRef.current++;
      },
    });
    setIsLoaded(false);
  };

  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return { itemLists, isLoaded, setTarget };
};

export default useList;
