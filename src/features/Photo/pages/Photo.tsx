import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Banner from '../../../components/Banner/Banner';
import AddNew from './AddEdit/AddNew';
import MainPage from './MainPage/MainPage';
function Photo() {
    return (
         <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="add" element={<AddNew/>}/>
            </Routes>
         </>
           
    );
}

export default Photo;