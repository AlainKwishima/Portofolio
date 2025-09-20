import type { SVGProps } from 'react';

export const PrometheusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle cx="256" cy="256" r="256" fill="#E6522C" />
    <path
      fill="#fff"
      d="M256 120c-12 36.5-40 58.5-40 98 0 20.5 9 37.5 25.5 48-6-9-8.5-18.5-8.5-29 0-21.5 9-35 17-48 8 13 17 26.5 17 48 0 10.5-2.5 20-8.5 29 16.5-10.5 25.5-27.5 25.5-48 0-39.5-28-61.5-40-98Z"
    />
    <path
      fill="#fff"
      d="M176 336c0-26.5 38.5-48 80-48s80 21.5 80 48c0 28-34.5 40-80 40s-80-12-80-40Z"
    />
  </svg>
);
