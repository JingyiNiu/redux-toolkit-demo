import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';
import { setAuth, removeAuth } from '../utils/authUtils';

const useAuth = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        setTimeout(() => {
            dispatch(login());
            setAuth();
        }, 2000);
    };

    const handleLogout = () => {
        dispatch(logout());
        removeAuth();
    };

    return { isLoggedIn, handleLogin, handleLogout };
};

export default useAuth;
