import React from 'react';
import Product from '../Product/Product';
import CartCard from '../../../CartCard';

const Cart = ({selectedProduct,setSelectedProduct}) => {
    console.log(selectedProduct);
        return (
        <div>
            {
                selectedProduct.map(Product=> <CartCard key={Product.id} product={Product} ></CartCard> )
            }
        </div>
    );
};

export default Cart;