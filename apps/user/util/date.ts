import dayjs from "dayjs";

export const dotDate = (date?: string) => {
  return dayjs(date).format("YYYY.MM.DD");
};
