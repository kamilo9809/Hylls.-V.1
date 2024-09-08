import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";
import Charge from "./pages/charge/Charge";
import { configuration } from "./utils/configurations/routes";

const Directions = () => {
  const {Company,Discography,Services,PlayList} = configuration


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="company" element={
        <React.Suspense fallback={<Charge/>}>
          <Company/>
        </React.Suspense>
       }
      />
      <Route path="discography" element={
        <React.Suspense fallback={<Charge/>}>
          <Discography/>
        </React.Suspense>
       }
      />
      <Route path="services" element={
        <React.Suspense fallback={<Charge/>}>
          <Services/>
        </React.Suspense>
       }
      />
      <Route path="playlist" element={
        <React.Suspense fallback={<Charge/>}>
          <PlayList/>
        </React.Suspense>
       }
      />
    </Routes>
  )
}

export default Directions
