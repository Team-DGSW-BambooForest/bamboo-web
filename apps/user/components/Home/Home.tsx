import { TestData } from "../../data/test.data";
import { useGetPostsQuery } from "../../queries/Post/post.query";
import { PostResponse } from "../../repository/Post/post.response";
import HomeItem from "./HomeItem/HomeItem";
import { HomeItemContainer } from "./HomeItem/HomeItem.style";
import HomeSideBar from "./HomeSideBar/HomeSideBar";

const Home = () => {
  const { data: PostData } = useGetPostsQuery();
  console.log(PostData?.list);

  return (
    <>
      <HomeItemContainer>
        {PostData?.list.map((data) => (
          <HomeItem data={data} key={data.title} />
        ))}
      </HomeItemContainer>
      <HomeSideBar />
    </>
  );
};

export default Home;
