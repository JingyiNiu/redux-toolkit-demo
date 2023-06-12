import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Nav = () => {
    const { isLoggedIn, handleLogout  } = useAuth();

    return (
        <nav className="bg-neutral-200 px-4 py-2">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/counter">Counter</NavLink>
                    </div>
                    <div className="flex">
                        {isLoggedIn ? (
                            <button className="border px-2 mr-2" onClick={handleLogout }>
                                logout
                            </button>
                        ) : (
                            <NavLink to="/login">Login</NavLink>
                        )}
                    </div>
                </div>
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
        <div className="mx-2">
            <Link to={to}>{children}</Link>
        </div>
    );
};
