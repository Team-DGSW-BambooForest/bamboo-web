import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType, NextPageContext } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Header from "../components/Common/Header";
import Layout from "../components/Common/Layout";
import ProfileBar from "../components/Common/ProfileBar";
import { GlobalStyles } from "../components/Common/Styles/Global.style";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}) => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <ProfileBar />
            <Header />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
