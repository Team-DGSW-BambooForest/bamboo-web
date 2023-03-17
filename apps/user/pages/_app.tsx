import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { BambooThemeProvider } from "@bamboo/styled-theme";
import Layout from "../components/Common/Layout/Layout";
import Header from "../components/Common/Header/Header";
import ProfileBar from "../components/Common/Profile/ProfileBar";
import ScrollButton from "../components/Common/Button/ScrollButton";
import GlobalStyle from "../styles/GlobalStyle";
import GlobalStyles from "../styles/GlobalStyle1";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: any) => {
  const queryClientRef = React.useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <GlobalStyles />
      <BambooThemeProvider mode="light">
        <RecoilRoot>
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <ProfileBar />
              <Header />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Hydrate>
            <ScrollButton />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </RecoilRoot>
      </BambooThemeProvider>
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
