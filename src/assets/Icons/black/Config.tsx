import { SVGProps } from "react";

export function Config({
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
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8C3 7.44772 3.44772 7 4 7H8C8.55228 7 9 7.44772 9 8V12C9 12.5523 8.55228 13 8 13H4C3.44772 13 3 12.5523 3 12V8ZM5 9V11H7V9H5Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3C6.55228 3 7 3.44772 7 4V8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8V4C5 3.44772 5.44772 3 6 3Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11C6.55228 11 7 11.4477 7 12V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V12C5 11.4477 5.44772 11 6 11Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18V14ZM11 15V17H13V15H11Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C12.5523 3 13 3.44772 13 4V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V4C11 3.44772 11.4477 3 12 3Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C12.5523 17 13 17.4477 13 18V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18C11 17.4477 11.4477 17 12 17Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5C15 4.44772 15.4477 4 16 4H20C20.5523 4 21 4.44772 21 5V9C21 9.55228 20.5523 10 20 10H16C15.4477 10 15 9.55228 15 9V5ZM17 6V8H19V6H17Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3C18.5523 3 19 3.44772 19 4V5C19 5.55228 18.5523 6 18 6C17.4477 6 17 5.55228 17 5V4C17 3.44772 17.4477 3 18 3Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8C18.5523 8 19 8.44772 19 9V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V9C17 8.44772 17.4477 8 18 8Z"
        fill={fill}
      />
    </svg>
  );
}
