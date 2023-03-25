import { useGetPostsQuery } from "../../queries/Post/post.query";
import { HomeMainContainer } from "./Home.style";
import HomeItem from "./HomeItem/HomeItem";
import { HomeItemContainer } from "./HomeItem/HomeItem.style";
import HomeSideBar from "./HomeSideBar/HomeSideBar";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import useList from "./hooks/useList";

const LoaderWrap = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

interface LoaderProps {
  isLoaded: boolean;
}

const Loaders: any = ({ isLoaded }: LoaderProps) => {
  return (
    <>
      {isLoaded && (
        <LoaderWrap>
          <CircleLoader />
        </LoaderWrap>
      )}
    </>
  );
};

const Container = ({
  setTarget,
  children,
}: {
  setTarget: any;
  children: React.ReactNode;
}) => {
  return <div ref={setTarget}>{children}</div>;
};

Loaders.Container = Container;

const Home = () => {
  const { isLoaded, itemLists, setTarget } = useList();

  return (
    <>
      <HomeMainContainer>
        <HomeItemContainer>
          {itemLists?.map((data) => (
            <HomeItem data={data} postId={data.postId} key={data.postId} />
          ))}
          <Loaders.Container setTarget={setTarget}>
            <Loaders isLoaded={isLoaded} />
          </Loaders.Container>
        </HomeItemContainer>
        <HomeSideBar />
      </HomeMainContainer>
    </>
  );
};

export default Home;
