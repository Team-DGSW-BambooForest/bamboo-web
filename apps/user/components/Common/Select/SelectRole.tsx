import { Card, Select } from "@bamboo/ui";
import React from "react";
import ikmyung from "../../../asset/ikmyung.svg";
import haerin from "../../../asset/haerin.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { SelectRoleText } from "./SelectRole.style";
import { WriteTopText, WriteTopWrap, WirteTopLine } from "../Write/write.style";

const SelectRole = () => {
  return (
    <Card
      size="md"
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        paddingBottom: "27px",
      }}
    >
      <WriteTopWrap>
        <WriteTopText>내 프로필 선택</WriteTopText>
        <AiOutlineClose style={{ marginRight: "18px" }} />
      </WriteTopWrap>
      <WirteTopLine />
      <SelectRoleText>
        이 게시물에서 다른 프로필로 활동하려면 전환하세요
      </SelectRoleText>
      <Select
        items={[
          {
            name: "익명",
            img: ikmyung.src,
          },
          {
            name: "강해린",
            img: haerin.src,
          },
        ]}
      ></Select>
    </Card>
  );
};

export default SelectRole;
