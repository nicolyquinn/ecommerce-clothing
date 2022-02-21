import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';

export default ( ) => {

    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-in" exact element={<Login />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/register" exact element={<Register />} />
        </Routes>
    );
}