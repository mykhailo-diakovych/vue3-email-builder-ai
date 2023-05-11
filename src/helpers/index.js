export const getImageUrl = (path) => {
  return `${new URL(`/src/${path}`, import.meta.url)}`;
};
