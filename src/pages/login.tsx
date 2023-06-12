import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { isLoggedIn, handleLogin } = useAuth();

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>Already Logged in</div>
                </>
            ) : (
                <>
                    <div>Please Login</div>
                    <button className="border px-2 mr-2" onClick={handleLogin}>
                        login
                    </button>
                </>
            )}
        </>
    );
};

export default Login;
