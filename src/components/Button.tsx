import React from 'react';

interface ButtonProps<T extends React.ElementType> {
  className?: string;
  as?: T | string;
  children: React.ReactNode;
  [key: string]: any;
}

const Button = <T extends React.ElementType>({
  className = '',
  as: Tag = 'button',
  ...props
}: ButtonProps<T>) => (
  <Tag
    className={`inline-block bg-blue-600 px-6 py-2 text-white font-semibold rounded-sm shadow-lg shadow-blue-100 transition-colors hover:bg-blue-500 ${className}`}
    {...props}
  />
);

export default Button;
