


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import Title from "../Title";
import ProductItem from "../ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 5)); // Update state
        }
    }, [products]); // Include dependencies

    return (
        <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
            <div className="d-flex flex-wrap gap-4">
                {
                    related.map((item, index) => (
                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
    );
};

export default RelatedProducts;
