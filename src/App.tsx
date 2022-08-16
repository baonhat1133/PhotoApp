import React, { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

const PhotoLazy=React.lazy(()=>import("./features/Photo/pages/Photo"))
function App() {
  return (
    <div>
            <Header/>
            <Routes>
              <Route path="/" element={<Navigate to="/photos"/>}/>
              <Route path="photos" element={
                <Suspense fallback={<div style={{textAlign:"center", fontSize:"68px"}}>LOADING DATA...</div>}>
                  <PhotoLazy/>
                </Suspense>}>
                <Route path="*" element={<NotFound/>}/>
              </Route>
            </Routes>
    </div>
  );
}

export default App;
