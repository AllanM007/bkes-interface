import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BurnbKES from "./pages/burnbKES";
import debtPositions from "./pages/debtPositions";
import HomePage from "./pages/homePage";
import MintbKES from "./pages/mintbKES";
import Transfer from "./pages/transfer";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="mint" element={<MintbKES />} />
                    <Route path="burn" element={<BurnbKES />} />
                    {/* <Route path="/debtPositions" element={<debtPositions />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;