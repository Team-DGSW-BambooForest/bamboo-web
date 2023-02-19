import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useState } from "react";
import { writePostParam } from "../../repository/Post/post.param";

const usePost = () => {
  const [postData, setPostData] = useState<writePostParam>({
    content: "",
    title: "",
    hashtags: [],
  });

  const router = useRouter();

  const onChangeWritePostData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangePostDataText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPostData = () => {
    const { content, title } = postData;

    if (title === "") {
      window.alert("제목을 입력해주세요");
      return;
    }

    if (content === "") {
      window.alert("내용을 입력해주세요");
      return;
    }
  };

  return null;
};

export default usePost;
