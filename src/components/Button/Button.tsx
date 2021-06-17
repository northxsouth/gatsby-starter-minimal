import clsx from 'clsx';
import * as React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * @defaultValue: primary
   */
  theme?: 'primary' | 'secondary';
  size?: 'sm' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  type = 'button',
  size = 'sm',
  children,
  ...rest
}) => {
  const classes = clsx(
    'inline-flex border-0 rounded focus:outline-none',
    {
      'py-2 px-6 text-lg': size === 'lg',
      'py-1 px-3 text-sm': size === 'sm',
    },
    {
      'text-white bg-primary-500 hover:bg-primary-600': theme === 'primary',
      'text-white bg-secondary-500 hover:bg-secondary-600':
        theme === 'secondary',
    },
  );
  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
};

export { Button };
