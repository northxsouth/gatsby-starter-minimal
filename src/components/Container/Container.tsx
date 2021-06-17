import * as React from 'react';
import clsx from 'clsx';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  centered = true,
  ...rest
}) => {
  const classes = clsx('container', { 'mx-auto': centered }, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { Container };
