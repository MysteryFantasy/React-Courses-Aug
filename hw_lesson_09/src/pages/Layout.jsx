import React from 'react';
import {Provider} from 'react-redux';

import store from '../store/store';

import Navigation from '../components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouteHome from '../routes/RouteHome';
import RouteCountries from '../routes/RouteCountries';
import RouteCountry from '../routes/RouteCountry';

export default function Layout() {
    return (
        <BrowserRouter>
        <header>
            <Navigation />
        </header>
        <main>
            <Provider store={store}>
                <Routes>
                    <Route index path={"/"} element={<RouteHome />}></Route>
                    <Route path={"countries"} element={<RouteCountries />}></Route>
                    <Route path="countries/:country" element={<RouteCountry />}></Route>
                </Routes>
            </Provider>
        </main>
    </BrowserRouter>
    );
}