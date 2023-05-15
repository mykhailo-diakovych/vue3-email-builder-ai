export const getImageUrl = (path) => {
  return `${new URL(`/src/${path}`, import.meta.url)}`;
};

export const checkIfHasScrollBar = (contentBox, scrollBox) => {
  return (
    document.querySelector(contentBox).scrollHeight <
    document.querySelector(scrollBox).clientHeight
  );
};
