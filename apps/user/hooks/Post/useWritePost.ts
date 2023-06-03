import { useRef } from "react";
import { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePostFileQuery } from "../../queries/File/file.query";
import {
  useSignedWrtiePostQuery,
  useWrtiePostQuery,
} from "../../queries/Post/post.query";
import { WritePostParam } from "../../repository/Post/post.param";

const useWritePost = (close: () => void) => {
  const [postData, setPostData] = useState<WritePostParam>({
    content: "",
    hashtags: [],
  });

  const writePostMutation = useWrtiePostQuery();
  const signedWritePostMutation = useSignedWrtiePostQuery();
  const postFileMutation = usePostFileQuery();
  const [file, setFile] = useState<FileList>();
  const [postId, setPostId] = useState<number>(-1);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangePostDataText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClick = () => {
    fileRef.current?.click();
  };

  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files!!);
  };

  const onSubmitPostData = () => {
    const { content, hashtags } = postData;

    if (content == "") {
      toast.info("내용을 입력해주세요");
      return;
    }

    writePostMutation.mutate(
      { content, hashtags },
      {
        onSuccess: (res: any) => {
          toast.success("게시물 요청 성공");
          setPostData({
            content: "",
            hashtags: [],
          });

          setPostId(res!!);
          if (file && file?.length !== 0) {
            postFileMutation.mutate({ postId: res, file: file[0] });
          }
          close();
        },
        onError: () => {
          toast.error("게시물 요청 실패");
        },
      }
    );
  };
  const signedOnSubmitPostData = () => {
    const { content, hashtags } = postData;

    if (content === "") {
      toast.info("내용을 입력해주세요");
      return;
    }

    signedWritePostMutation.mutate(
      { content, hashtags },
      {
        onSuccess: (res: any) => {
          toast.success("게시물 요청 성공");
          setPostData({
            content: "",
            hashtags: [],
          });
          setPostId(res!!);
          close();
        },
        onError: () => {
          toast.error("게시물 요청 실패");
        },
      }
    );
  };

  useEffect(() => {
    if (postId !== -1) {
      if (file) {
        postFileMutation.mutate(
          { postId, file: file!![0] },
          {
            onSuccess: () => {
              close();
            },
          }
        );
      }
    }
  }, [postId]);

  return {
    postData,
    setPostData,
    onChangePostDataText,
    onSubmitPostData,
    changeFile,
    fileRef,
    inputClick,
    signedOnSubmitPostData,
    file,
  };
};

export default useWritePost;
