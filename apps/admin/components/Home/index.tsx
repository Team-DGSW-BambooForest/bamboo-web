import { useRouter } from "next/router";
import { useGetFileQuery } from "../../queries/File/file.query";
import { useGetHoldPost, useGetPostList } from "../../queries/Post/post.query";
import HomeHoldItem from "./HomeHoldItem";
import HomeItem from "./HomeItem/indext";
import {
  AdminHoldItemContainer,
  AdminHomeContainer,
  AdminHomeMainContainer,
} from "./style";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import useList from "../../hooks/Util/useList";

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
  end,
}: {
  setTarget: any;
  children: React.ReactNode;
  end: boolean;
}) => {
  return <>{!end && <div ref={setTarget}>{children}</div>}</>;
};

Loaders.Container = Container;

const Home = () => {
  const { isLoaded, itemLists, setTarget, end } = useList();
  const { data: HoldData } = useGetHoldPost();

  const { pathname } = useRouter();

  return (
    <AdminHomeContainer>
      {pathname === "/" && (
        <AdminHoldItemContainer>
          {HoldData?.list.map((data) => (
            <HomeHoldItem data={data} />
          ))}
        </AdminHoldItemContainer>
      )}
      {pathname === "/item" && (
        <AdminHoldItemContainer>
          <AdminHomeMainContainer>
            {itemLists?.map((data) => (
              <HomeItem data={data} postId={data.postId} key={data.postId} />
            ))}
            <Loaders.Container setTarget={setTarget} end={end}>
              <Loaders isLoaded={isLoaded} />
            </Loaders.Container>
          </AdminHomeMainContainer>
        </AdminHoldItemContainer>
      )}
    </AdminHomeContainer>
  );
};

export default Home;
