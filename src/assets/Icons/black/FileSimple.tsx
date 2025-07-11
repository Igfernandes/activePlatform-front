import { SVGProps } from "react";

export function FileSimple({
  width = 24,
  height = 24,
  fill = "#101010",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 48 48`}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="17.5"
        x2="30.5"
        y1="22.5"
        y2="22.5"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <line
        x1="17.5"
        x2="26.5"
        y1="29.5"
        y2="29.5"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M22.1,42.5h13.4c1.7,0,3-1.3,3-3v-25h-7c-1.1,0-2-0.9-2-2v-7"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M24,5.5H12.5c-1.7,0-3,1.3-3,3v31c0,1.7,1.3,3,3,3h3.9"
      />
      <line
        x1="38.5"
        x2="29.5"
        y1="14.5"
        y2="5.5"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
}
