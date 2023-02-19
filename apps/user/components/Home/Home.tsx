import { TestData } from "../../data/test.data";
import HomeItem from "./HomeItem/HomeItem";
import { HomeItemContainer } from "./HomeItem/HomeItem.style";
import HomeSideBar from "./HomeSideBar/HomeSideBar";

const Home = () => {
  return (
    <>
      <HomeItemContainer>
        {TestData.map((data) => (
          <HomeItem data={data} key={data.title} />
        ))}
      </HomeItemContainer>
      <HomeSideBar />
    </>
  );
};

export default Home;
