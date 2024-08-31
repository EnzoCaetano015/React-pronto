import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PGN from "./pages/PageNotFound";


function AppRoutes(){

    return(

        <BrowserRouter>
        
            <Routes>

                <Route path = "/" element = {<Home></Home>}></Route>
                <Route path = "/Watch/:id" element = {<Watch></Watch>}></Route>
                <Route path = "*" element = {<PGN></PGN>}></Route>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;