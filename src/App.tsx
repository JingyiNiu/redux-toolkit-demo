import React, { ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Counter from './pages/counter';
import NotFound from './pages/not-found';
import Login from './pages/login';
import useAuth from './hooks/useAuth';
import './App.css';
import './styles/global.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="counter"
                        element={
                            <RequireAuth>
                                <Counter />
                            </RequireAuth>
                        }
                    />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

function RequireAuth ({ children }: { children: JSX.Element }) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
