// if want to use each product use this page

import { Link, useParams } from "react-router-dom";
import data from "../data";

const SingleProduct = () =>{
    // show of eachc product when click of the link below the title
    console.log(useParams());

    // show the page id that set from below function
    const { productId } = useParams();

    // when it.name === productId that show of the image and more data  when click of the link
    const product = data.find((it)=>it.Name === productId);
    const { Image, Name } = product; // image and name in data.js

    return (
        <section className="section">
            <img src={Image} alt={Name}/>
            <h5>{Name}</h5>
            <Link to="/products">Back</Link>
        </section>
    )
}

export default SingleProduct