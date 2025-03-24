import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetCategoriesRequest } from "./types";

export default function useGetCategories(request: GetCategoriesRequest = {}) {
  const { getCategories } = useGet();

  async function handle() {
    const { data } = await getCategories(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["categories", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
