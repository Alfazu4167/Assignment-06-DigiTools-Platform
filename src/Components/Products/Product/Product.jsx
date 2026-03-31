import React from 'react';
import Card from '../../Ui/Card';

const Product = ({ products, selectedProduct, setSelectedProduct }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-6 max-w-11/12 mx-auto'>
            {
                products.map(product => <Card key={product.id} product={product} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></Card>)
            }
        </div>
    );
};

export default Product;