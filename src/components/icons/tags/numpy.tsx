import type { SVGProps } from 'react'

export const NumpyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox='0 0 256 256'
        width='256'
        height='256'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
    >
        <path
            d='M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm0 25c56.885 0 103 46.115 103 103s-46.115 103-103 103S25 184.885 25 128 71.115 25 128 25z'
            fill='#013243'
        />
        <path
            d='M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 156c-37.5 0-68-30.5-68-68s30.5-68 68-68 68 30.5 68 68-30.5 68-68 68z'
            fill='#4DABCF'
        />
    </svg>
)
