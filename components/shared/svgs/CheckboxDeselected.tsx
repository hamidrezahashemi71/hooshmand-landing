import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckboxDeselected = (props: SVGProps<SVGSVGElement>) => (
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
      rx={7.75}
    />
    <rect
      width={23.5}
      height={23.5}
      x={0.25}
      y={0.25}
      stroke="#E3E3E3"
      strokeWidth={0.5}
      rx={7.75}
    />
  </svg>
);
export default SvgCheckboxDeselected;
