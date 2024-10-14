import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M0 0h24v24H0z' />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m17 9.5-5 5-5-5'
    />
  </svg>
);
export default SvgChevronDown;
