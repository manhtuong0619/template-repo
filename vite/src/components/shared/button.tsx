import React from 'react';
import { cn } from '@src/libs/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, className, disabled, ...restProps } = props;
  return (
    <button className={cn('rounded-lg bg-black px-6 py-4 text-white', className)} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
