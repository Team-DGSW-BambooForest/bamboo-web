const ScrollTop = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return { scrollToTop };
};

export default ScrollTop;
