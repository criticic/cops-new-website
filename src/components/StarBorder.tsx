import React from 'react';

type StarBorderProps<T extends React.ElementType = 'button'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
}>;

const StarBorder = <T extends React.ElementType = 'button'>(
  props: StarBorderProps<T>
) => {
  const {
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    style,
    ...rest
  } = props;

  const Component = as || 'button';

  return React.createElement(
    Component,
    {
      className: `relative inline-block overflow-hidden rounded-[20px] ${className}`,
      style: {
        padding: `${thickness}px 0`,
        ...(style || {}),
      },
      ...rest,
    },
    <>
      <div
        className="animate-star-movement-bottom absolute right-[-250%] bottom-[-11px] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="animate-star-movement-top absolute top-[-10px] left-[-250%] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 rounded-[20px] border border-gray-800 bg-gradient-to-b from-black to-gray-900">
        {children}
      </div>
    </>
  );
};

export default StarBorder;