import React from 'react';

const Featured = () => {
    return (
        <div  className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-10 flex justify-center items-center gap-6'>
            <div className='text-center'>
                <h2 className='font-bold text-5xl text-white'>50K+</h2>
                <p className='text-white opacity-70'>Active Users</p>
            </div>
              <div className="divider lg:divider-horizontal"></div>
            <div className='text-center'>
                <h2 className='font-bold text-5xl text-white'>200+</h2>
                <p className='text-white opacity-70'>Premium Tools</p>
            </div>
              <div className="divider lg:divider-horizontal text-white"></div>
            <div className='text-center'>
                <h2 className='font-bold text-5xl text-white'>4.9</h2>
                <p className='text-white opacity-70'>Rating</p>
            </div>
        </div>
    );
};

export default Featured;