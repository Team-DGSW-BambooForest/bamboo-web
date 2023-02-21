import {
  WirteTopLine,
  WriteAddImageWrap,
  WriteAddText,
  WriteContainer,
  WriteImageWrap,
  WritePostForm,
  WritePostInput,
  WriteTopText,
  WriteTopWrap,
  WriteUserInfoWrap,
  WriteUserName,
} from "./Write.style";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import Haerin from "../../../asset/Haerin.jpeg";
import { Avatar, Button, Card } from "@bamboo/ui";
import useWritePost from "../../../hooks/Post/useWritePost";

interface Props {
  isOpened: boolean;
}

const Write = () => {
  const { onChangePostDataText, onSubmitPostData, postData, setPostData } =
    useWritePost();
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
        <Avatar src={Haerin.src} alt="" size="sm" />
        <WriteUserName>강해린</WriteUserName>
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
      <Button size="lg" color="primary" onClick={onSubmitPostData}>
        제보
      </Button>
    </Card>
  );
};

export default Write;
