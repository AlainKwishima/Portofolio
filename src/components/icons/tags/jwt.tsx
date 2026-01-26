import type { SVGProps } from 'react'

export const JwtIcon = (props: SVGProps<SVGSVGElement>) => (
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
            fill='#FB015B'
        />
        <path d='M65 85h126v86H65z' fill='#FB015B' />
        <path d='M90 105h76v46H90z' fill='#FFFFFF' />
    </svg>
)
