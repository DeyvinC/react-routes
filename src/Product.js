import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
function Product () {
    const params = useParams();

    return (
        <>
        <h1>Product: {params.id}</h1>
        <Link to="/">Home</Link>
        </>
    )
}

export default Product;