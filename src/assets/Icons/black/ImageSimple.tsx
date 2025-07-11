import { SVGProps } from "react";

export function ImageSimple({
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
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M42.5,23.1v13.1c0,2.3-1.9,4.2-4.2,4.2H9.7"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M5.5,27.4V11.7c0-2.3,1.9-4.2,4.2-4.2h28.5c2.3,0,4.2,1.9,4.2,4.2v4.9"
      />
      <circle
        cx="18.8"
        cy="16.5"
        r="3"
        fill="none"
        stroke={fill}
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M27.1,29.2l2.2-2.6c1-1.1,2.7-1.1,3.7,0L41.8,37"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M26.1,36.2L18,26.6c-1-1.1-2.7-1.1-3.7,0l-8,8.5c-2,2.1-0.5,5.5,2.4,5.5h8.8"
      />
    </svg>
  );
}
