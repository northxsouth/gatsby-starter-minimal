import * as React from 'react';
import classNames from 'classnames';

export type FullWidthContainerProps = React.HTMLAttributes<HTMLDivElement>;

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('w-full', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { FullWidthContainer };
