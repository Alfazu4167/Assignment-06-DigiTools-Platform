import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const StartedSection = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-10'>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-10'>
            <div className='card p-8 flex justify-center items-center bg-base-200 shadow-md space-y-4'>
                    <div className="btn btn-primary rounded-full absolute right-2 top-2">01</div>
                    <div className='h-auto w-auto rounded-full p-5 shadow-2xl'>
                        <img src={User} alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold'>Create Account</h2>
                    <p className='text-[#627382] max-w-83 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>    
            
            <div className='card p-8 flex justify-center items-center bg-base-200 shadow-md space-y-4'>
                    <div className="btn btn-primary rounded-full absolute right-2 top-2">02</div>
                    <div className='h-auto w-auto rounded-full p-5 shadow-2xl'>
                        <img src={Package} alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold'>Choose Products</h2>
                    <p className='text-[#627382] max-w-83 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='card p-8 flex justify-center items-center bg-base-200 shadow-md space-y-4'>
                    <div className="btn btn-primary rounded-full absolute right-2 top-2">03</div>
                    <div className='h-auto w-auto rounded-full p-5 shadow-2xl'>
                        <img src={Rocket} alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold'>Start Creating</h2>
                    <p className='text-[#627382] max-w-83 text-center'>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default StartedSection;