export default input => {
  const videoIdRegex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|https?:\/\/youtu\.be\/|youtube\.com\/shorts\/|^)([a-zA-Z0-9_-]{11})/;
  const match = input.match(videoIdRegex);
  return match ? match[1] : null;
};
