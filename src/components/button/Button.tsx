import '../../index.css';

type ButtonProps = Readonly<{
  children: string;
}>;

export const Button = (props: ButtonProps) => {
  return (
    <button className='lp-bg-blue-500 hover:lp-bg-blue-600 lp-text-white lp-font-bold lp-py-2 lp-px-4 lp-rounded'>
      {props.children}
    </button>
  );
};
