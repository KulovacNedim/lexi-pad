import type { SVGProps } from 'react';
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M7.88 13.175a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L5.159 10zm1.073 6.536a.5.5 0 1 1-.906-.422l7-15a.5.5 0 0 1 .906.422zm7.167-8.886a.5.5 0 0 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.76-.65L18.841 14z' />
  </svg>
);
export default SvgCode;
