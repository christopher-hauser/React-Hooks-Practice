import React from 'react'

function ProductListItem({ product, isSelected, onClick, selectedProduct }) {
    return (
        <div className={`product-list-item ${isSelected && product.id === selectedProduct.id? ' selected' : ''}`}>
            <img className="product-list-item-photo"
                 src={product.photo.filename}
                 alt={`${product.name}`}
            />
            <button onClick={onClick}>{product.name}</button>
        </div>
    )
}

export default ProductListItem;
