import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import HomeItemDetail from "../../components/Home/HomeItem/HomeItemDetail/HomeItemDetail";
import { DetailContainer } from "../../components/Home/HomeItem/HomeItemDetail/HomeItemDetail.style";
import HomeSideBar from "../../components/Home/HomeSideBar/HomeSideBar";
import { useGetPostById } from "../../queries/Post/post.query";

const View = () => {
  const { query } = useRouter();
  const { data } = useGetPostById({ id: Number(query.id) });

  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh", background: "#ffffff" }}>
        <DetailContainer>
          <HomeItemDetail data={data} postId={Number(query.id)} />
        </DetailContainer>
        <HomeSideBar />
      </div>
    </>
  );
};

export default View;
