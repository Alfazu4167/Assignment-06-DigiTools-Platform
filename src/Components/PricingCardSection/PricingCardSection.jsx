import React from 'react';

const PricingCardSection = () => {
    return (
        <div className='mt-50 max-w-11/12 mx-auto'>

        <div className='text-center p-8 space-y-4'>
            <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
            <p className='text-[#d7e0e9]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card-body flex flex-col relative bg-base-200 shadow-md rounded-2xl">

                    <div className='space-y-4 '>
                        <h2 className="text-3xl font-bold">Started</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                        <h2 className='text-3xl font-bold '>$0<span className='text-sm text-[#627382]'>/month</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs grow">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>


                    </ul>
                    <div className="mt-6">
                        <button className="btn rounded-[100px] btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-auto">Get Started Free</button>
                    </div>
                </div>
                <div className="card-body flex-1 relative bg-base-200 shadow-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl">
                    <div className='flex justify-between'>
                        <img src='' alt="" />
                        <span className="badge badge-md bg-[#FEF3C6] text-[#BB4D00] absolute right-40 -top-1.5 ">Most Popular</span>
                    </div>
                    <div className='space-y-4'>
                        <h2 className="text-3xl font-bold">Pro</h2>
                        <p className='text-white opacity-70'>Best for professionals</p>
                        <h2 className='text-3xl font-bold text-white'>$29<span className='text-sm text-white opacity-70'>/month</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>


                    </ul>
                    <div className="mt-6">
                        <button className="btn rounded-[100px] btn-block mt-auto">Start Pro Trial</button>
                    </div>
                </div>
                <div className="card-body flex flex-col relative bg-base-200 shadow-md rounded-2xl">

                    <div className='space-y-4'>
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className='text-[#627382]'>For teams and businesses</p>
                        <h2 className='text-3xl font-bold '>$99<span className='text-sm text-[#627382]'>/month</span></h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs grow">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>


                    </ul>
                    <div className="mt-6">
                        <button className="btn rounded-[100px] btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-auto">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCardSection;