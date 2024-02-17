import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  style?: string;
}

const LinkButton = ({
  style,
  href,
  children,
}: LinkButtonProps) => {
  return (
    <Link href={href}>
      <button className={style}>
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
