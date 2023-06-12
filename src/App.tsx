import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Counter from './pages/counter';
import NotFound from './pages/not-found';
import "./App.css"
import "./styles/global.css"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="counter" element={<Counter />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
