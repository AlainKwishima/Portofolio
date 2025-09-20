import type { SVGProps } from 'react';

export const AWSIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 400 200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <text
      x="0"
      y="80"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="72"
      fontWeight="bold"
      fill="#232F3E"
    >
      AWS
    </text>
    <path
      d="M60 120c40 50 160 50 200 0"
      stroke="#FF9900"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="60" cy="120" r="6" fill="#FF9900" />
    <circle cx="260" cy="120" r="6" fill="#FF9900" />
  </svg>
);
