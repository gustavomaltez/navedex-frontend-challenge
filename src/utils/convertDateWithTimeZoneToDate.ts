export default function convertDateWithTimeZoneToDate(date: string): string {
  const currentDate = new Date(date);

  const day =
    currentDate.getDate() >= 31
      ? currentDate.getDate()
      : currentDate.getDate() + 1;

  const month = currentDate.getMonth() + 1;

  const year = currentDate.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
}
