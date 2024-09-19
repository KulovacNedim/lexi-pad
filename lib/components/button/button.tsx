type ButtonProps = Readonly<{
  children: string;
}>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className='lp-bg-red-500 lp-text-red-900 lp-p-14 lp-border-2  lp-border-purple-900'
      onClick={() => console.log('click')}
    >
      {props.children}
    </button>
  );
};
