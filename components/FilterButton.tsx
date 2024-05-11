import React from 'react';

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: string;
  selectTab: () => void;
}

const FilterButton = ({ active, style, children, selectTab }: Props) => {
  const btnClasses = active ? 'bg-red-600 text-white' : 'text-black';

  return (
    <button className='mx-auto md:mx-0' onClick={selectTab}>
      <p className={`text-xl px-4 py-2 ${btnClasses} hover:-translate-y-1`}>
        {children}
      </p>
    </button>
  );
};

export default FilterButton;
