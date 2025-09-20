import type { SVGProps } from 'react';

export const UberIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect width="512" height="512" rx="96" fill="#000" />
    <path
      fill="#fff"
      d="M139.5 178h36v93.2c0 20.2 11.4 31.4 30.6 31.4s30.6-11.2 30.6-31.4V178h36v92.4c0 40.2-25.4 64.2-66.6 64.2s-66.6-24-66.6-64.2V178ZM356.2 250.2c-18 0-29.6 12.8-29.6 31.2s11.6 31.2 29.6 31.2c14.4 0 22.8-6 27-17.6h33.6c-4.4 27.4-26.8 45.6-60.6 45.6-38.8 0-64.2-25.8-64.2-59.2s25.2-59.2 63.6-59.2c35.2 0 58.2 22 60.2 53.2h-33.6c-2.6-10.8-9.8-16.4-25.4-16.4ZM253 178h36v134h-36V178Z"
    />
  </svg>
);
