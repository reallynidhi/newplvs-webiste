import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  id: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  id, 
  children, 
  isActive, 
  onClick 
}) => {
  return (
    <Link 
      to={to} 
      onClick={(e) => onClick(e, id)}
      className={`hover:text-gray-600 transition-colors ${isActive ? 'font-bold' : ''}`}
    >
      {children}
    </Link>
  );
};