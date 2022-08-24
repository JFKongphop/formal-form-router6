// if want to use each product use this page

import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="section">
                <h2>Products</h2>

                {/* show data on this page */}
                <Outlet/>
            </section>
        </>
    )
}

export default Home