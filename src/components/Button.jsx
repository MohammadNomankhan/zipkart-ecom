import clsx from 'clsx';

const Button = ({ btnText, btnType, btnIcon = null, handleClick = null, className }) => {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        'font-medium transition duration-300 ease-in-out transform ',
        btnType == 'filled'
          ? 'rounded-lg px-8 py-3 bg-[#74b5ff] text-slate-800 focus:ring-2 focus:ring-primary hover:-translate-y-1 hover:scale-95'
          : btnType == 'outlined'
          ? 'rounded-lg border border-[#74b5ff] px-8 py-3 text-[#74b5ff] hover:scale-105'
          : btnType == 'icon'
          ? 'rounded-full hover:bg-gray-100 p-2'
          : 'text-primary font-medium hover:bg-slate-300 justify-center items-center transition rounded-lg flex items-center gap-1',
        className
      )}
    >
      {btnIcon}
      <span>{btnText}</span>
    </button>
  );
};

export default Button;

