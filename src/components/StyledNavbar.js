import { NavLink } from "react-router-dom";

const StyledNavbar = () =>{
    const pages = ["About", "Products", "Service", "Login"];

    const eachNavLink = pages.map((page, index)=>{
            return <NavLink 
                        key={index} 
                        to={page} 
                        className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            {page}
                    </NavLink>
    })

    return (
        <nav className="navbar">
            <div>
                <h1 className="name-app">Title Content</h1>
            </div>
            <div className="nav-link">

                <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
                    Home
                </NavLink>

                <div>{eachNavLink}</div>

            </div>
        </nav>
    )
}

export default StyledNavbar