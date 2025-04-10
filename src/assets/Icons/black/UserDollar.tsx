import { SVGProps } from "react";

export function UserDollar({
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
      <g clip-path="url(#clip0_932_40960)">
        <path
          d="M8.40039 7C8.40039 8.06087 8.82182 9.07828 9.57196 9.82843C10.3221 10.5786 11.3395 11 12.4004 11C13.4613 11 14.4787 10.5786 15.2288 9.82843C15.979 9.07828 16.4004 8.06087 16.4004 7C16.4004 5.93913 15.979 4.92172 15.2288 4.17157C14.4787 3.42143 13.4613 3 12.4004 3C11.3395 3 10.3221 3.42143 9.57196 4.17157C8.82182 4.92172 8.40039 5.93913 8.40039 7Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.40039 21V19C6.40039 17.9391 6.82182 16.9217 7.57196 16.1716C8.32211 15.4214 9.33952 15 10.4004 15H13.4004"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.4004 15H18.9004C18.5026 15 18.121 15.158 17.8397 15.4393C17.5584 15.7206 17.4004 16.1022 17.4004 16.5C17.4004 16.8978 17.5584 17.2794 17.8397 17.5607C18.121 17.842 18.5026 18 18.9004 18H19.9004C20.2982 18 20.6797 18.158 20.9611 18.4393C21.2424 18.7206 21.4004 19.1022 21.4004 19.5C21.4004 19.8978 21.2424 20.2794 20.9611 20.5607C20.6797 20.842 20.2982 21 19.9004 21H17.4004"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4004 21V22M19.4004 14V15"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_932_40960">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.400391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
