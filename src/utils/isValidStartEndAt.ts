import { Dayjs } from "dayjs";

export const isValidStartEndAt = (
  now: Dayjs,
  startAt: string | null,
  endAt: string | null
) => {
  const isValidStartAt = startAt === null || now.diff(startAt) >= 0;
  const isValidEndAt = endAt === null || now.diff(endAt) <= 0;
  return isValidStartAt && isValidEndAt;
};
