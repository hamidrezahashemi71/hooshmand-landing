import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckboxSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={23.5}
      height={23.5}
      x={0.25}
      y={0.25}
      fill="#ECECEC"
      rx={3.75}
    />
    <rect
      width={23.5}
      height={23.5}
      x={0.25}
      y={0.25}
      stroke="#E3E3E3"
      strokeWidth={0.5}
      rx={3.75}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 20.333h5c4.167 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.458 12 2.359 2.358 4.725-4.716"
    />
  </svg>
);
export default SvgCheckboxSelected;
