import * as React from 'react';
import clsx from 'clsx';

export type FullWidthContainerProps = React.HTMLAttributes<HTMLDivElement>;

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = clsx('w-full', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { FullWidthContainer };
