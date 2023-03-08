import { useRouter } from "next/router";
import HomeItemDetail from "../../components/Home/HomeItem/HomeItemDetail/HomeItemDetail";
import {
  DetailContainer,
  MainDetailContainer,
} from "../../components/Home/HomeItem/HomeItemDetail/HomeItemDetail.style";
import HomeSideBar from "../../components/Home/HomeSideBar/HomeSideBar";
import { useGetPostById } from "../../queries/Post/post.query";

const View = () => {
  const { query } = useRouter();
  const { data } = useGetPostById({ id: Number(query.id) });

  return (
    <>
      <MainDetailContainer>
        <DetailContainer>
          <HomeItemDetail data={data} postId={Number(query.id)} />
        </DetailContainer>
        <HomeSideBar />
      </MainDetailContainer>
    </>
  );
};

export default View;
