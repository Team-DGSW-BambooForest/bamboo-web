import HomeItem from "./HomeItem";
import HomeSideBar from "./HomeSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeItem />
        <HomeSideBar />
      </HomeContainer>
    </>
  );
};

export default Home;
