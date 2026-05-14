import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#141414"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.333 28C22.33 28 28 22.329 28 15.333S22.329 2.667 15.333 2.667 2.667 8.337 2.667 15.333 8.337 28 15.333 28M29.333 29.333l-2.666-2.666"
    />
  </svg>
);
export default SvgSearchNormal;
