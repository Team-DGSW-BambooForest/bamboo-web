import {
  WirteTopLine,
  WriteAddImageWrap,
  WriteAddText,
  WriteContainer,
  WriteImageWrap,
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

interface Props {
  isOpened: boolean;
}

const Write = () => {
  return (
    <WriteContainer>
      <WriteTopWrap>
        <WriteTopText>기명 제보하기</WriteTopText>
        <AiOutlineClose style={{ marginRight: "18px" }} />
      </WriteTopWrap>
      <WirteTopLine />
      <WriteUserInfoWrap>
        <Avatar src={Haerin.src} alt="" size="sm" />
        <WriteUserName>강해린</WriteUserName>
      </WriteUserInfoWrap>
      <WritePostInput placeholder="대대숲에 제보를 남겨보세요" />
      <WriteImageWrap>
        <WriteAddText>게시물에 추가</WriteAddText>
        <WriteAddImageWrap>
          <MdOutlinePhotoCamera />
          <BiImageAlt />
        </WriteAddImageWrap>
      </WriteImageWrap>
      <Button size="lg" color="primary">
        제보
      </Button>
    </WriteContainer>
  );
};

export default Write;
