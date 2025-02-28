import { SVGProps } from "react";

export function ArrowDown({
  width = 10,
  height = 24,
  fill = "#101010",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 10 24`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="seta"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74408 11.9106C3.06951 11.5851 3.59715 11.5851 3.92259 11.9106L5.83333 13.8213L7.74408 11.9106C8.06951 11.5851 8.59715 11.5851 8.92259 11.9106C9.24803 12.236 9.24803 12.7637 8.92259 13.0891L6.42259 15.5891C6.09715 15.9145 5.56951 15.9145 5.24408 15.5891L2.74408 13.0891C2.41864 12.7637 2.41864 12.236 2.74408 11.9106Z"
        fill="#101010"
      />
      <path
        className="seta"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.83333 4.1665C6.29357 4.1665 6.66667 4.5396 6.66667 4.99984V14.9998C6.66667 15.4601 6.29357 15.8332 5.83333 15.8332C5.3731 15.8332 5 15.4601 5 14.9998V4.99984C5 4.5396 5.3731 4.1665 5.83333 4.1665Z"
        fill="#101010"
      />
    </svg>
  );
}
