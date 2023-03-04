import { useGetPostsQuery } from "../../queries/Post/post.query";
import HomeItem from "./HomeItem/HomeItem";
import { HomeItemContainer } from "./HomeItem/HomeItem.style";
import HomeSideBar from "./HomeSideBar/HomeSideBar";

const Home = () => {
  const { data: PostData } = useGetPostsQuery();

  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh", background: "#FBFCFF" }}>
        <HomeItemContainer>
          {PostData?.list.map((data) => (
            <HomeItem data={data} postId={data.postId} key={data.postId} />
          ))}
        </HomeItemContainer>
        <HomeSideBar />
      </div>
    </>
  );
};

export default Home;
