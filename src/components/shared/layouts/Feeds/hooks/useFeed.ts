import { useState } from "react";
import { FeedDataShape } from "../type";

type Props = {
  data: Array<FeedDataShape>;
};

export function useFeed({ data }: Props) {
  const [feeds, setFeeds] = useState<Array<FeedDataShape>>(data);

  const handleSearch = (query: string) => {
    setFeeds((feeds) => {
        if(!query) return data;

      return feeds.filter((item) => item.message.includes(query));
    });
  };

  return {
    feeds,
    handleSearch,
  };
}
