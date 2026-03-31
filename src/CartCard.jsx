import React from 'react';

const CartCard = ({ product }) => {
    console.log(product);
    return (
        <div className='flex justify-between bg-base-200 shadow-sm space-y-3'>
            <div className='flex items-center justify-center gap-4'>
               <div className='h-[75px] w-auto'>
                 <img src={product.icon} alt="" />
               </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{product.name}</h2>
                    <p>${product.price}</p>
                </div>
            </div>
           <div>
             <button className='btn text-red-500'>Remove</button>
           </div>
        </div>
    );
};

export default CartCard;