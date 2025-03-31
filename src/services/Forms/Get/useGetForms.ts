import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetFormsRequest } from "./types";

export default function useGetForms(request: GetFormsRequest = {}) {
  const { getForms } = useGet();

  async function handle() {
    const { data } = await getForms(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["forms", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
