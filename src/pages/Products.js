// use with sharedProductsLayout, sharedProduct and singleProducts

import { Link } from "react-router-dom";
import data from "../data";

const Products = () =>{
    // show of all product in this page
    // if want to more info click to the link below

    return (
        <section className="section">
            <div className="products">
                {data.map((it)=>{
                    return <article key={it.Age}>
                        <h5>{it.Name}</h5>
                        <Link to={`/products/${it.Name}`}>more info</Link>
                    </article>
                })}
            </div>
            <Link to="/" className="btn">Home</Link>
        </section>
    )
}

export default Products