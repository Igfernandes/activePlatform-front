import { SVGProps } from "react";

export function ArrowLeft({
  width = 6,
  height = 10,
  fill = "#101010",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 6 10`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47173 0.528758C5.73208 0.789108 5.73208 1.21122 5.47173 1.47157L1.94313 5.00016L5.47173 8.52876C5.73208 8.78911 5.73208 9.21122 5.47173 9.47157C5.21138 9.73192 4.78927 9.73192 4.52892 9.47157L0.528921 5.47157C0.268572 5.21122 0.268572 4.78911 0.528921 4.52876L4.52892 0.528758C4.78927 0.268409 5.21138 0.268409 5.47173 0.528758Z"
        fill={fill}
      />
    </svg>
  );
}
