import * as React from 'react';
import clsx from 'clsx';

export interface SlimContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

const SlimContainer: React.FC<SlimContainerProps> = ({
  children,
  className,
  centered = true,
  ...rest
}) => {
  const classes = clsx(
    'container lg:max-w-6xl',
    { 'mx-auto': centered },
    className,
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { SlimContainer };
