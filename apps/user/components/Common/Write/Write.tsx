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
  DisableInput,
} from "./write.style";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { Avatar, Button, Card } from "@bamboo/ui";
import useWritePost from "../../../hooks/Post/useWritePost";
import anonymous from "../../../asset/anonymous.svg";

const Write = ({ close }: { close: () => void }) => {
  const {
    onChangePostDataText,
    onSubmitPostData,
    postData,
    changeFile,
    fileRef,
    inputClick,
  } = useWritePost(close);

  return (
    <Card
      size="md"
      style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
    >
      <WriteTopWrap>
        <WriteTopText>익명 제보하기</WriteTopText>
        <AiOutlineClose style={{ marginRight: "18px" }} />
      </WriteTopWrap>
      <WirteTopLine />
      <WriteUserInfoWrap>
        <Avatar src={anonymous.src} alt="이미지 없음" size="sm" />
        <WriteUserName>익명이</WriteUserName>
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
          <BiImageAlt onClick={inputClick} />
          <DisableInput type="file" ref={fileRef} onChange={changeFile} />
        </WriteAddImageWrap>
      </WriteImageWrap>
      <Button size="lg" color="primary" onClick={onSubmitPostData}>
        제보
      </Button>
    </Card>
  );
};

export default Write;
