import { When } from "@components/utilities/When";
import { SkeletonShapes } from "./shapes";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
  settings?: {
    type: keyof typeof SkeletonShapes;
    amount?: number;
  };
};

export function Skeleton({
  isLoading,
  children,
  settings = { type: "boxes" },
}: Props) {
  const Shape = SkeletonShapes[settings.type];

  return (
    <>
      <When value={!isLoading}>{children}</When>
      <When value={isLoading}>
        <Shape {...settings} />
      </When>
    </>
  );
}
