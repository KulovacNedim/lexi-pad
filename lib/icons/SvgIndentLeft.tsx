import type { SVGProps } from 'react';
const SvgIndentLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1zm7 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1zm0 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1zm-7 4a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1zM3 9.5a.5.5 0 0 1 .8-.4l4 3a.5.5 0 0 1 0 .8l-4 3a.5.5 0 0 1-.8-.4zm1 1v4l2.667-2z' />
  </svg>
);
export default SvgIndentLeft;
