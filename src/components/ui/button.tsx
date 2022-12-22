import { PropsWithChildren } from 'react';

type ButtonProps = {
  label?: string;
  title?: string;
  className?: string;
  type?: 'button' | 'submit';
  icon?: JSX.Element;
  isDisabled?: boolean;
  onClick?: () => void;
} & PropsWithChildren;

export const Button = ({
  icon,
  title,
  label,
  onClick,
  children,
  className,
  isDisabled = false,
  type = 'button',
}: ButtonProps) => {
  const cursorStyle = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const isTouchDevice = 'ontouchstart' in document.documentElement;

  return (
    <button
      title={title}
      disabled={isDisabled}
      className={`${cursorStyle} ${className} flex-center min-w-[11rem] gap-4 rounded-md px-6 py-3 text-2xl text-color-base transition-transform duration-200 hover:ring-2 hover:ring-color-highlight active:translate-y-2 max-xs:ring-1 max-xs:ring-color-highlight`}
      onClick={() => {
        if (!isTouchDevice && onClick) onClick();
      }}
      onTouchStart={() => {
        if (isTouchDevice && onClick) onClick();
      }}
      type={type}>
      {icon} {label} {children}
    </button>
  );
};
