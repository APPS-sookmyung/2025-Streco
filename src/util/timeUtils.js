export const formatTime = (date) => {
  if (!date) return "";
  return date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const formatElapsedTime = (timestampTime, startTime) => {
  if (!timestampTime || !startTime) return "00:00";

  const broadcastStart = new Date(startTime);

  const diffInMs = timestampTime.getTime() - startTime.getTime();

  if (diffInMs < 0) return "00:00";

  const totalSeconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};
