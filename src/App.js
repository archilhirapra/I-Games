import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Ads from "./components/Ads";
import GameListPage from "./components/GameListPage";
import './App.css';

function App() {

    useEffect(()=>{
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-4143105908582327",
            enable_page_level_ads: true
       });
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ads.txt" element={<Ads />} />
                <Route path="/action" element={<GameListPage isFrom='action' />} />
                <Route path="/adventure" element={<GameListPage isFrom='adventure' />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
