import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  bgColor: string;
  textColor: string;
  href: string
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ bgColor, textColor, href, children }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <button
        className={`border border-[${bgColor}] p-2 bg-[#C89A77] text-${textColor} hover:opacity-70`}
      >
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
