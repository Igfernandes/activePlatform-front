import { setParams, setQueries } from "@helpers/routes";



export function useRoutes() {
  return {
    setParams: setParams,
    setQueries: setQueries,
  };
}
