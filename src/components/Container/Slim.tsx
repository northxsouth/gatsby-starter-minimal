import * as React from 'react';
import classNames from 'classnames';

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
  const classes = classNames(
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
