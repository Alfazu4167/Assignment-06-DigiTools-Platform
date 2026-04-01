import React from 'react';

const CartCard = ({ product, handleDeleteSelectedProduct }) => {


    return (
        <div>
            
            <div className='flex justify-between items-center bg-base-200 shadow-sm p-3 mt-5'>
                <div className='flex justify-center items-center gap-4'>
                    <div className=''>
                        <img src={product.icon} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>{product.name}</h2>
                        <p className='text-[#627382]'>${product.price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleDeleteSelectedProduct(product)} className='btn text-red-500'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;