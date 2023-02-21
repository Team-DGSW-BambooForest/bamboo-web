import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { writeUploadPostImageAtom } from "../../atom/Write/Write.atom";
import { useWrtiePostQuery } from "../../queries/Post/post.query";
import { writePostParam } from "../../repository/Post/post.param";

const useWritePost = () => {
  const [postData, setPostData] = useState<writePostParam>({
    content: "",
    hashtags: [],
  });

  const writePostMutation = useWrtiePostQuery();

  const router = useRouter();

  const onChangePostDataText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPostData = () => {
    const { content, hashtags } = postData;

    if (content === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    writePostMutation.mutateAsync(
      { content, hashtags },
      {
        onSuccess: () => {
          window.alert("게시물 등록 성공");
          router.push("/");
          setPostData({
            content: "",
            hashtags: [],
          });
        },
        onError: () => {
          window.alert("게시물 등록 실패");
        },
      }
    );
  };

  return {
    postData,
    setPostData,
    onChangePostDataText,
    onSubmitPostData,
  };
};

export default useWritePost;
