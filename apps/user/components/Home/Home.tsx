import { useGetPostsQuery } from "../../queries/Post/post.query";
import { HomeMainContainer } from "./Home.style";
import HomeItem from "./HomeItem/HomeItem";
import { HomeItemContainer } from "./HomeItem/HomeItem.style";
import HomeSideBar from "./HomeSideBar/HomeSideBar";

const Home = () => {
  const { data: PostData } = useGetPostsQuery();

  return (
    <>
      <HomeMainContainer>
        <HomeItemContainer>
          {PostData?.list.map((data) => (
            <HomeItem data={data} postId={data.postId} key={data.postId} />
          ))}
        </HomeItemContainer>
        <HomeSideBar />
      </HomeMainContainer>
    </>
  );
};

export default Home;
