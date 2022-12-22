import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { Button } from "@bamboo/ui";

export default function Docs({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Button color="black" size="md">
        abc
      </Button>
      {post.map((v: any, idx: number) => (
        <div key={idx}>{v.title}</div>
      ))}
    </>
  );
}

/**
 * 게시글을 불러온후 props로 넘겨줌
 *
 * @param context
 * @returns post
 */
export const getServerSideProps: GetServerSideProps<{ post: any[] }> = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const post = [
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
    { title: "sdf" },
  ];

  return {
    props: {
      post,
    },
  };
};
