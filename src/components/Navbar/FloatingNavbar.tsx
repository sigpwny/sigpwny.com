import React from 'react';
import SmartLink from '@/components/SmartLink';

interface NavLink {
  name: string;
  url: string;
}

interface FloatingNavbarProps {
  links: NavLink[];
}

export default function FloatingNavbar({ links }: FloatingNavbarProps) {
  return (
    <div className="bg-surface-100/80 backdrop-blur rounded-xl border-2 border-surface-150/80 sticky top-4 my-4 z-10 shadow-[0_0px_10px_rgba(0,0,0,0.25)] shadow-primary">
      <ul className="flex flex-row p-2 gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <SmartLink
              to={link.url}
              className="block px-3 py-1 text-white hover:bg-surface-200/50 rounded-lg font-medium text-lg"
            >
              {link.name}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
};