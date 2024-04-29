import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  style?: string;
  tab?: string;
}

const LinkButton = ({
  style,
  href,
  children,
  tab,
}: LinkButtonProps) => {
  return (
    <Link href={href} target={tab}>
      <button className={style}>
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
