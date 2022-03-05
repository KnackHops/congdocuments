import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import AnyList from "../../../non-hooks/AnyList"

const Navigation = () => {
    const { pathname } = useLocation();

    const navList = useMemo( () => {
        const contstructArr = [];

        [
            {
                label: "login",
                whichEl: "navlink",
                passPara: {
                    to: "/login"
                }
            },
            {
                label: "register",
                whichEl: "navlink",
                passPara: {
                    to: "/register"
                }
            }
        ].forEach( item => {
            contstructArr.push( item )
        } )

        // when user is not logged

        return contstructArr
    }, [ pathname ] )

    return (
        <div>
            <nav>
                <AnyList arrList={ navList } arrClass={ "navigation" } />
            </nav>
        </div>
    )
}

export default Navigation