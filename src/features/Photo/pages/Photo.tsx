import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Banner from '../../../components/Banner/Banner';
import AddNew from './AddEdit/AddNew';
import MainPage from './MainPage/MainPage';
function Photo() {
    return (
         <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>{/* /photo */}
                <Route path="add" element={<AddNew/>}/>{/* /photo/add */}
                <Route path="add/:photoId" element={<AddNew/>}/>{/* /photo/add/id_bất_kì */}
            </Routes>
         </>
           
    );
}

export default Photo;