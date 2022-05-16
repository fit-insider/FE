import React from 'react';

interface ConditionalInterface {
  children: any
  when: boolean
}

const Conditional = ({ children, when }: ConditionalInterface) => {
  return (
    <>
      { when && children}
    </>
  );
};

export default Conditional;
