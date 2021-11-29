import React from 'react';
import { useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

    // TODO: Replace with state variable
    const [sideOpen, setSideOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState();
    const [isSelected, setIsSelected] = useState(false)
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
