export function convertMinutesToHourString(minutesAmount: number) {
  const hour = String(Math.floor(minutesAmount / 60)).padStart(2, "0");
  const minutes = String(minutesAmount % 60).padStart(2, "0");

  return `${hour}:${minutes}`;
}
