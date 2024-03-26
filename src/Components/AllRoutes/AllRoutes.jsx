import { Route, Routes } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";


const Alloutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    )
}

export default Alloutes;