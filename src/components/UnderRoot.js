import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Home from "./Main/Pages/Home";
import LandPage from "./Main/Pages/LandPage";

const UserContext = createContext( null )

const UnderRoot = () => {
    const [ user, setUser ] = useState( null );

    const loginHandler = () => {

    }

    return (
        <UserContext.Provider value={ {
            user,
            loginHandler
        } }>
        <>
            <Header />
            <Routes>
                <Route path="/*" element={ <Main /> } >
                    <Route index element={ <LandPage /> } />
                    <Route path="home/*" element={ <Home /> } />
                </Route>
            </Routes>
        </>
        </UserContext.Provider>
    )
}

export default UnderRoot;
export { UserContext }