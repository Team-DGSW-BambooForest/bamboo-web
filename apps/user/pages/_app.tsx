import { RecoilRoot } from "recoil";
import AuthCheck from "../components/common/Auth/AuthCheck";

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <AuthCheck>
        <Component ponent {...pageProps} />
      </AuthCheck>
    </RecoilRoot>
  );
}

export default MyApp;
