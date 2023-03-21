import useLogin from "../hooks/Auth/useLogin";

const Callback = () => {
  useLogin();

  return <div>AuthLoadingPage</div>;
};

export default Callback;
