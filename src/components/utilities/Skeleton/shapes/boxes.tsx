type Props = {
  amount?: number;
};

export function BoxesSkeleton({ amount = 1 }: Props) {
  const percentage = `w-[${100 / amount}%]`;
  return (
    <div className="flex justify-start">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={`skeleton_boxes_${index}`}
          className={`skeleton ${percentage} h-[5rem] mx-4`}
        ></div>
      ))}
    </div>
  );
}
