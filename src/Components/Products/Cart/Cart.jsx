import React from 'react';
import Product from '../Product/Product';
import CartCard from '../../../CartCard';

const Cart = ({ selectedProduct, setSelectedProduct, totalPrice, setTotalPrice }) => {
    const handleCheckoutBtn = () => {
        setSelectedProduct([])
        setTotalPrice(0)
    }
    const handleDeleteSelectedProduct = (product) => {
        const filteredProduct = selectedProduct.filter(selectedProduct => selectedProduct.name !== product.name)
        setSelectedProduct(filteredProduct)
        setTotalPrice(totalPrice - product.price)
    }
    return (
        <div className='max-w-11/12 mx-auto space-y-5'>
            <h2 className='text-3xl font-bold'>Your Cart</h2>
            {
                selectedProduct.length === 0 ? <div className=' h-[40vh] mx-auto flex flex-col justify-center items-center gap-4 bg-base-200 mt-6'>
                    <h2 className='text-xl font-bold'>No Products Selected</h2>
                    <p className='text-[#627382]'>Please go to Product section to add Products</p>
                </div> :
                    selectedProduct.map((Product, ind) => <CartCard handleDeleteSelectedProduct={handleDeleteSelectedProduct} key={ind} product={Product} setTotalPrice={setTotalPrice}></CartCard>)
            }
            <div className='flex justify-between'>
                <p className='text-[#627382]'>Total</p>
                <p className='text-xl'>${totalPrice}</p>
            </div>
            <button onClick={handleCheckoutBtn} className="btn rounded-[100px] btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;