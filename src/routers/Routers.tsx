import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../App';
import Home from '../pages/Home/Home';

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}