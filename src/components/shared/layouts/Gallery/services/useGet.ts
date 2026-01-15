import { useRoutes } from "@hooks/useRoutes";
import { useAxios, useQueryGuard } from "@hooks/useAxios";
import { GalleryResponse } from "../type";

export default function useGetGalleries(url: string = "", key: string = "") {
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function handle() {
    if (url === "") return null;
    const { data } = await axios.get<GalleryResponse>(
      setQueries({
        url,
      })
    );
    return data ?? null;
  }

  const { data } = useQueryGuard({
    queryKey: [key],
    queryFn: handle,
  });

  return data ?? [];
}
