import React, { useState } from 'react';
import Li from './Li';
import { toast } from 'react-toastify';

const Card = ({ product, selectedProduct, setSelectedProduct, totalPrice, setTotalPrice }) => {
    // console.log(product);
    const { name, price, tagType, period, icon, description } = product;

    const [isSelected, setIsSelected] = useState(false)
    const features = product.features

    const handleSelectedProduct = () => {

        setTotalPrice(totalPrice + price)
        setIsSelected(true);
        setSelectedProduct([...selectedProduct, product])
        toast.success(`${name} added to cart`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-sm flex flex-col">

            <div className="card-body flex flex-col">
                <div className='flex justify-between'>
                    <img src={icon} alt="" />
                    <span className="badge badge-xs badge-warning flex justify-end">{tagType}</span>
                </div>
                <div className='space-y-4'>
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className='text-[#627382]'>{description}</p>
                    <h2>${price}/{period}</h2>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs grow">
                    {
                        features.map((feature, ind) => <Li key={ind} feature={feature}></Li>)
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={handleSelectedProduct} disabled={isSelected} className={`btn rounded-[100px] btn-block ${isSelected ? "bg-green-400 text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}>{isSelected ? "Added to Cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;