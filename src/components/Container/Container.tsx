import * as React from 'react';
import classNames from 'classnames';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  centered = true,
  ...rest
}) => {
  const classes = classNames('container', { 'mx-auto': centered }, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { Container };
