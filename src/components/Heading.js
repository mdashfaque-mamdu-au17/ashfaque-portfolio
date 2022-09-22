import classNames from 'classnames';
import React from 'react';

const Heading = ({ title, type }) => {
  const applyStyle = () => {};
  return (
    <h2
      className={classNames(
        'text-[25px] font-semibold leading-[37px] text-theme-red-600'
      )}
    >
      {title}
    </h2>
  );
};

export default Heading;
