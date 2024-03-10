// func to convert timestamp to date
function timestampToLocaleDateString(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US");
}

function dynamicTimestamp(timestamp) {
  const currentTime = Date.now();

  const timeDifference = currentTime - timestamp;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years + " years ago";
  }
  if (days > 0) {
    return days + " days ago";
  }
  if (hours > 0) {
    return hours + " hours ago";
  }
  if (minutes > 0) {
    return minutes + " minutes ago";
  } else {
    return seconds + " seconds ago";
  }
}

export { timestampToLocaleDateString, dynamicTimestamp };
