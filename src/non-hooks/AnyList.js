import { Link, NavLink } from "react-router-dom"

const AnyList = ( { arrList=[], arrClass="" } ) => {

    console.log( arrList )
    return (
        <div className={`${ arrClass }-con`}>
            <ul className={`${ arrClass }-inside`}>
                {
                    arrList.map( ( item, i ) => {
                        return <li key={ i }>
                            <p { ...item?.parentsPara || {} }>
                                { item?.whichEl === "p" && item?.label }
                                { item?.whichEl === "link" && <Link { ...item?.passPara || {} }> { item?.label } </Link> }
                                { item?.whichEl === "navlink" && <NavLink { ...item?.passPara || {} } > { item?.label } </NavLink> }
                                { item?.whichEl === "button" && <button { ...item?.passPara || {} } > { item?.label } </button> }
                            </p>
                        </li>
                    } )
                }
            </ul>
        </div>
    )
}

export default AnyList