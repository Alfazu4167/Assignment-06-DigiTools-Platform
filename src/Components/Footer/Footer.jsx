import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-base-content p-25 pb-5 '>
            <footer className="footer sm:footer-horizontal ">
                <div>
                    <h1 className='text-3xl font-bold text-[#627382] '>DigiTools</h1>
                    <p className='text-[#627382] max-w-[350px] '>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <nav className='text-[#627382]'>
                    <h6 className="footer-title text-white">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className='text-[#627382]'>
                    <h6 className="footer-title text-white">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav className='text-[#627382]'>
                    <h6 className="footer-title text-white">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-titl text-white">Social Links</h6>
                    <div className="grid grid-flow-col gap-4 ">
                        <a className='p-2 rounded-full bg-[#627382]' href=""><AiFillInstagram /></a>
                        <a className='p-2 rounded-full bg-[#627382]' href=""><FaFacebook /></a>
                        <a className='p-2 rounded-full bg-[#627382] ' href=""><FaXTwitter /></a>

                    </div>
                </nav>


            </footer>
            <hr className='border border-[#627382] opacity-75 mt-10' />
              <div className="divider text-[#627382]"></div>
            <div className='flex justify-between flex-col md:flex-row items-center mt-5'>
                <p className='text-[#627382]'>© 2026 Digitools. All rights reserved.</p>
                <ul className='gap-5 text-[#627382] flex  '>
                    <li className=''>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Footer;