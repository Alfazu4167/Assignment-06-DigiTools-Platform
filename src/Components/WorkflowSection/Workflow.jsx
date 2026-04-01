import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15 mt-20 flex justify-center items-center gap-6'>
            <div className='text-center space-y-5'>
                <h2 className='font-bold text-5xl text-white'>Ready to Transform Your Workflow?</h2>
                <p className='text-white opacity-70'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                <button className='btn bg-white text-[#9514FA] mr-4 rounded-[100px]'>Explore Products</button>
                <button className='btn btn-outline text-white rounded-[100px]'>View Pricing</button>
                <p className='text-white opacity-70'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default Workflow;