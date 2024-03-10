// func to convert timestamp to date
function timestampToLocaleDateString(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US");
}

export { timestampToLocaleDateString };
