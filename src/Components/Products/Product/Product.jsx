import React from 'react';
import Card from '../../Ui/Card';

const Product = ({ products, selectedProduct, setSelectedProduct, totalPrice,setTotalPrice }) => {

    return (
        <div className='grid lg:grid-cols-3 gap-6 max-w-11/12 mx-auto'>
            {
                products.map(product => <Card key={product.id} product={product} selectedProduct={selectedProduct}  setSelectedProduct={setSelectedProduct} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></Card>)
            }
        </div>
    );
};

export default Product;