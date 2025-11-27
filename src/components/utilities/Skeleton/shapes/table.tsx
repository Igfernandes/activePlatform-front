export function TableSkeleton() {
  return (
    <div>
      <div className="flex flex-wrap justify-between w-full">
        <div className="skeleton w-100 h-[5vh] md:w-40">
        </div>
        <div className="skeleton w-100 h-[5vh] md:w-60">
        </div>
      </div>
      <div className={`skeleton w-full h-[50vh] my-4`}></div>
    </div>
  );
}
