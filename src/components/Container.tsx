import React from 'react';

interface props {
  children: React.ReactNode | React.ReactNode[];
  className?:any;

}

function Container({ children, className }: props) {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-4 md:px-10 my-16`}>{children}</div>
  );
}

export default Container;
