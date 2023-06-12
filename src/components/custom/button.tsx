import React, { ReactNode } from 'react';

interface Props {
    onClick?: () => void;
    children: ReactNode;
}

const Button = ({ onClick, children }: Props) => {
    return (
        <button className="border mr-2 px-2" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
