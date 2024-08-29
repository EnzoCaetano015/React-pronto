import {BrowserRouter, Routes} from "react-router-dom";
import Home from "./pages/Home";


function AppRoutes(){

    return(

        <BrowserRouter>
        
            <Routes>

                <Route path = "/" element = {<Home></Home>}></Route>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;