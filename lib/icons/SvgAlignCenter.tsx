import type { SVGProps } from 'react';
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M4.5 7a.5.5 0 0 1 0-1h15a.5.5 0 1 1 0 1zm0 8a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1zm3-4a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1zm0 8a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1z' />
  </svg>
);
export default SvgAlignCenter;
