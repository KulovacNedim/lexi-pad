import type { SVGProps } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M8 6v6a4 4 0 1 0 8 0V6h-.5a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1H17v6a5 5 0 0 1-10 0V6h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm-.5 13a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1z' />
  </svg>
);
export default SvgUnderline;
