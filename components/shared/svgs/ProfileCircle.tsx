import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.16 17.04a1.3 1.3 0 0 0-.32 0 4.36 4.36 0 0 1-4.213-4.36A4.367 4.367 0 0 1 16 8.307a4.376 4.376 0 0 1 4.373 4.373 4.37 4.37 0 0 1-4.213 4.36M24.987 25.84A13.25 13.25 0 0 1 16 29.333c-3.467 0-6.613-1.32-8.987-3.493.134-1.253.934-2.48 2.36-3.44 3.654-2.427 9.627-2.427 13.254 0 1.426.96 2.226 2.187 2.36 3.44"
    />
    <path
      stroke="#141414"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.363 2.667 16 2.667 2.667 8.637 2.667 16 8.637 29.333 16 29.333"
    />
  </svg>
);
export default SvgProfileCircle;
