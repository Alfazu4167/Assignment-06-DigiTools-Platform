import React from 'react';
import Product from '../Product/Product';
import CartCard from '../../../CartCard';

const Cart = ({selectedProduct,setSelectedProduct}) => {
    console.log(selectedProduct);
        return (
        <div className='max-w-11/12 mx-auto space-y-5'>
            {
                selectedProduct.length ===0 ?  <div className=' h-[40vh] mx-auto flex flex-col justify-center items-center gap-4 bg-base-200 mt-6'>
                <h2 className='text-xl font-bold'>No Products Selected</h2>
                <p className='text-[#627382]'>Please go to Product section to add Products</p>
             </div> :
                selectedProduct.map(Product=> <CartCard key={Product.id} product={Product} ></CartCard> )
            }
        </div>
    );
};

export default Cart;