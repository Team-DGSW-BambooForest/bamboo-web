import { useGetHoldPost } from "../../queries/post/post.query";
import HomeHoldItem from "./HomeHoldItem";
import { AdminHoldItemContainer, AdminHomeContainer } from "./style";

const Home = () => {
  const { data: HoldData } = useGetHoldPost();
  return (
    <AdminHomeContainer>
      <AdminHoldItemContainer>
        {HoldData?.list.map((data) => (
          <HomeHoldItem data={data} />
        ))}
      </AdminHoldItemContainer>
    </AdminHomeContainer>
  );
};

export default Home;
