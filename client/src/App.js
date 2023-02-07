import React from 'react';
import { Route, Routes } from "react-router-dom";
import ClientPage from "./components/Contactus/ClientPage/ClientPage";
import DeveloperPage from "./components/Contactus/DeveloperPage/DeveloperPage";
import EventsPage from "./components/Events/EventsPage";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Universal/Footer/Footer";
import Header from "./components/Universal/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/client" element={<ClientPage/>}/>
          <Route path="/developer" element={<DeveloperPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
