import Link from "next/link";
import { FeedProps } from "./type";
import { useRef } from "react";
import { useFeed } from "./hooks/useFeed";

export function Feeds({ title, data }: FeedProps) {
  const { feeds, handleSearch } = useFeed({ data });
  const feedKey = useRef(`feed_${Math.random().toString(36).substring(2, 15)}`);

  return (
    <div className="feed shadow-sm bg-white p-4 w-full my-4 xl:my-0 rounded-md">
      <div className="header text-center shadow-xl py-1 border-2 border-tertiary">
        <span className="font-semibold">{title}</span>
      </div>
      <div className="shadow-sm p-1 mb-2">
        <input type="search" onChange={(e) => handleSearch(e.target.value)} placeholder="Busque pelo usuário" className="w-full text-sm shadow py-1 rounded-sm px-2" name={feedKey.current} id={feedKey.current} />
      </div>
      <div className="content bg-secondary h-[40vh] overflow-auto p-2">
        {feeds.map((item, key) => (
          <div className="row" key={`feed_${key}`}>
            <div className="bg-white rounded-md px-2 p-[1px] my-1">
              <Link href={item.scape}>
                <span className="text-xs line-clamp-1">{item.message}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
