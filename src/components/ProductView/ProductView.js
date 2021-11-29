import React from 'react';
import { useState, useEffect } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

    // TODO: Replace with state variable
    const [sideOpen, setSideOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState();
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        console.log(`selectedProduct CHANGED TO`, selectedProduct);
        if (selectedProduct) setSideOpen(true);
    }, [selectedProduct])

    useEffect(() => {
        console.log(`sideOpen CHANGED TO`, sideOpen);
        setIsSelected(false);
        if (!sideOpen) setSelectedProduct();
    }, [sideOpen])

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            isSelected={isSelected}
                            selectedProduct={selectedProduct}
                            onClick={() =>{
                                setSelectedProduct(item)
                                setIsSelected(true)
                            }
                            }
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => {
                             setSideOpen(!sideOpen);
                         }}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails product={selectedProduct} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
