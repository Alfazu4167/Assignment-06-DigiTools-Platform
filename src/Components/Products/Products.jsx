import React, { use, useState } from 'react';
import Card from '../Ui/Card';
import Product from './Product/Product';
import Cart from './Cart/Cart';

const Products = ({ productPromise }) => {
    const [btnType, setBtnType] = useState('product')
    const products = use(productPromise)
    
    const [selectedProduct,setSelectedProduct] = useState([]);
    
    return (
        <>
            <div className='flex justify-center items-center gap-2'>
                <button onClick={()=>setBtnType("product")} className={` btn rounded-[100px] ${btnType === "product"? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ":"bg-none"}`}>Products</button>
                <button onClick={()=>setBtnType("cart")} className={`btn rounded-[100px] ${btnType === "cart" ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ":"bg-none"}`}>Cart ({selectedProduct.length})</button>
            </div>
            <div >
                {
                    btnType ==="product"?<Product products={products} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></Product>:<Cart selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></Cart>
                }
            </div>
        </>
    );
};

export default Products;