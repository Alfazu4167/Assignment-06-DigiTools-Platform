import React from 'react';
import Hero from "../../assets/banner.png"
import BadgeImg from "../../assets/BadgeImg.png"
import { FaPlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                    src={Hero}
                    alt="AI Models Banner"
                />
                <div>
                    <div className="badge badge-soft badge-primary"><img src={BadgeImg} alt="" /> New: AI-Powered Tools Available</div>
                    <h1 className="mt-4 text-6xl font-bold">Supercharge YourDigital Workflow</h1>
                    <p className="py-6 text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-[100px] mr-4">Explore Products</button>
                    <button className="btn btn-outline border-[#9514FA] text-[#9514FA] rounded-[100px]"><FaPlay></FaPlay> Watch Demo</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;
