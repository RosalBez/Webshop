import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Photo1 from '../../assets/photos/photo1.jpg'
import Product from "../../Components/Product/Product";
import './ProductsOverview.css'

function ProductsOverview(props) {
    return (
        <>
            <h1> Alle producten </h1>
            <nav className="nav-products">
                <h4>
                    <NavLink to="/Armbanden" className="product-category">
                        Armbanden
                    </NavLink>
                </h4>
                <h4>
                    <NavLink to="/Kettingen" className="product-category">
                        Kettingen
                    </NavLink>
                </h4>
                <h4>
                    <NavLink to="/Brilkoorden" className="product-category">
                        Brilkoorden
                    </NavLink>
                </h4>
            </nav>

                    <Product image={Photo1}></Product>

        </>
    );
};


export default ProductsOverview;