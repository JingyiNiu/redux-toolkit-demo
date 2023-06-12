import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-neutral-200 px-4 py-2">
            <div className="container">
                <ul className="flex">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/counter">Counter</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

interface NavLinkProps {
    to: string;
    children: ReactNode;
}
const NavLink = ({ to, children }: NavLinkProps) => {
    return (
        <li className="mx-2">
            <Link to={to}>{children}</Link>
        </li>
    );
};
