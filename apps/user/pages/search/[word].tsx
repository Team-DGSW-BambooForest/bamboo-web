import { useRouter } from "next/router";
import { HomeMainContainer } from "../../components/Home/Home.style";
import { HomeItemContainer } from "../../components/Home/HomeItem/HomeItem.style";
import HomeSearchItem from "../../components/Home/HomeItem/HomeSearchItem/HomeSearchItem";
import { useGetPostByKeywrod } from "../../queries/Post/post.query";

const Search = () => {
  const { query } = useRouter();

  const { data } = useGetPostByKeywrod({
    word: String(query.word),
  });

  return (
    <>
      <HomeMainContainer>
        <HomeItemContainer>
          {data?.list.map((data) => (
            <HomeSearchItem data={data} />
          ))}
        </HomeItemContainer>
      </HomeMainContainer>
    </>
  );
};

export default Search;
