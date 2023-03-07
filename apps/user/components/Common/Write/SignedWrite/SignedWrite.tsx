import {
  WirteTopLine,
  WriteAddImageWrap,
  WriteAddText,
  WriteImageWrap,
  WritePostInput,
  WriteTopText,
  WriteTopWrap,
  WriteUserInfoWrap,
  WriteUserName,
} from "../Write.style";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { Avatar, Button, Card } from "@bamboo/ui";
import useWritePost from "../../../../hooks/Post/useWritePost";
import { useGetUserQuery } from "../../../../queries/User/user.query";
import { useEffect, useState } from "react";
import { getToken } from "../../../../util/localstorage";

const SignedWrite = ({ close }: { close: () => void }) => {
  const { onChangePostDataText, signedOnSubmitPostData, postData } =
    useWritePost(close);

  const { data } = useGetUserQuery();

  const [tokenState, setTokenState] = useState<string | null>();

  useEffect(() => {
    setTokenState(getToken().accessToken);

    if (!tokenState) {
      window.alert("로그인 후 제보할 수 있습니다.");
      close();
    }
  }, [tokenState]);

  return (
    <Card
      size="md"
      style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
    >
      <WriteTopWrap>
        <WriteTopText>기명 제보하기</WriteTopText>
        <AiOutlineClose style={{ marginRight: "18px" }} />
      </WriteTopWrap>
      <WirteTopLine />
      <WriteUserInfoWrap>
        <Avatar src={data?.profileImage!!} alt="" size="sm" />
        <WriteUserName>{data?.name}</WriteUserName>
      </WriteUserInfoWrap>
      <WritePostInput
        name="content"
        onChange={onChangePostDataText}
        value={postData.content}
        placeholder="대대숲에 제보를 남겨보세요"
      />
      <WriteImageWrap>
        <WriteAddText>게시물에 추가</WriteAddText>
        <WriteAddImageWrap>
          <MdOutlinePhotoCamera />
          <BiImageAlt />
        </WriteAddImageWrap>
      </WriteImageWrap>
      <Button size="lg" color="primary" onClick={signedOnSubmitPostData}>
        제보
      </Button>
    </Card>
  );
};

export default SignedWrite;
