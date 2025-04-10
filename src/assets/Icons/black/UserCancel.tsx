import { SVGProps } from "react";

export function UserCancel({
  width = 25,
  height = 24,
  fill = "#101010",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_932_40953)">
        <path
          d="M8.2002 7C8.2002 8.06087 8.62162 9.07828 9.37177 9.82843C10.1219 10.5786 11.1393 11 12.2002 11C13.2611 11 14.2785 10.5786 15.0286 9.82843C15.7788 9.07828 16.2002 8.06087 16.2002 7C16.2002 5.93913 15.7788 4.92172 15.0286 4.17157C14.2785 3.42143 13.2611 3 12.2002 3C11.1393 3 10.1219 3.42143 9.37177 4.17157C8.62162 4.92172 8.2002 5.93913 8.2002 7Z"
          stroke={fill}
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.2002 21V19C6.2002 17.9391 6.62162 16.9217 7.37177 16.1716C8.12191 15.4214 9.13933 15 10.2002 15H13.7002"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.2002 19C16.2002 19.7956 16.5163 20.5587 17.0789 21.1213C17.6415 21.6839 18.4045 22 19.2002 22C19.9958 22 20.7589 21.6839 21.3215 21.1213C21.8841 20.5587 22.2002 19.7956 22.2002 19C22.2002 18.2044 21.8841 17.4413 21.3215 16.8787C20.7589 16.3161 19.9958 16 19.2002 16C18.4045 16 17.6415 16.3161 17.0789 16.8787C16.5163 17.4413 16.2002 18.2044 16.2002 19Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2002 21L21.2002 17"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_932_40953">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.200195)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
