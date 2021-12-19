import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Preloader } from "../components";

import Home from '../pages/Home/Home';
const Layout = lazy(() => import('../layout'));
const Main = lazy(() => import('../pages/Main/Main')); 

export default function Routers(){
    return(
        <Suspense fallback={<Preloader />}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="full" element={<Layout />}>
                        <Route index element={<Main />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}