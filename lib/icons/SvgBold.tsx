import type { SVGProps } from 'react';
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M7 7a1 1 0 1 1 0-2h6.5a4 4 0 0 1 2.875 6.781A4 4 0 0 1 14 19H7a1 1 0 0 1 0-2zm2 0v4h4.5a2 2 0 1 0 0-4zm0 6v4h5a2 2 0 1 0 0-4q-.085 0-.166-.014-.165.015-.334.014z' />
  </svg>
);
export default SvgBold;
