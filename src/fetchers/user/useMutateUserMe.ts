import useSWRMutation from "swr/mutation";
import { PATCHUserMe, PATCHUserMeOptions } from "@/apis";

type FetcherKey = readonly [[string, string]];

const fetcher = async (_: FetcherKey, { arg }: { arg: PATCHUserMeOptions }) => {
  await PATCHUserMe(arg);
};

export const useMutateUserMe = () =>
  useSWRMutation<any, any, FetcherKey, PATCHUserMeOptions>(
    [["PATCH", "/user/me"]],
    fetcher
  );
