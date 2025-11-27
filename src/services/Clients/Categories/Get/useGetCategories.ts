import useGet from ".";
import { GetCategoriesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetCategories(request: GetCategoriesRequest = {}) {
  const { getCategories } = useGet();

  async function handle() {
    const { data } = await getCategories(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["categories", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
