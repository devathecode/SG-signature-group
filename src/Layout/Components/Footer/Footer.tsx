import React from 'react';

const Footer = () => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            <div className="flex items-center space-x-6 my-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
                    <path d="M20.568 0H3.431C1.536 0 0 1.536 0 3.431v17.137C0 22.464 1.536 24 3.431 24h9.352v-9.294H8.961v-3.603h3.822V8.294c0-3.799 2.319-5.867 5.697-5.867 1.534 0 2.855.115 3.238.166v3.96l-2.22.001c-1.74 0-2.076.828-2.076 2.034v2.668h4.151l-.542 3.603h-3.609V24h7.017c1.895 0 3.431-1.536 3.431-3.431V3.431c0-1.895-1.536-3.431-3.431-3.431z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
                    <path
                        d="M22.9 4.07a9.23 9.23 0 0 1-2.6.7A4.6 4.6 0 0 0 22.27 2a9.21 9.21 0 0 1-2.93 1.12 4.58 4.58 0 0 0-7.82 4.18A13 13 0 0 1 3.1 2.68a4.59 4.59 0 0 0-.62 2.32 4.57 4.57 0 0 0 2.05 3.82 4.61 4.61 0 0 1-2.09-.57v.06a4.58 4.58 0 0 0 3.68 4.48 4.6 4.6 0 0 1-1.21.16 4.13 4.13 0 0 1-.82-.08 4.58 4.58 0 0 0 4.28 3.18A9.2 9.2 0 0 1 3 18.18a9.34 9.34 0 0 1-1.1-.07 12.94 12.94 0 0 0 7.06 2.07c8.4 0 13-6.96 13-13v-.59a9.31 9.31 0 0 0 2.29-2.38z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-white w-7 h-7">
                    <path d="M23.5 6.2c-.3-1.1-1-2-2-2.3C19.9 3.3 12 3 12 3S4.1 3.3 3.5 3.9c-1 .3-1.7 1.2-2 2.3C1.1 7 1 8 1 12s.1 5  .5 5.8c.3 1.1 1 2 2 2.3C4.1 20.7 12 21 12 21s7.9-.3 8.5-.9c1-.3 1.7-1.2 2-2.3.4-.8.5-1.8.5-5s-.1-4.2-.5-5.8zM9.7 15.4V8.6l6.3 3.4-6.3 3.4z"/>
                </svg>
            </div>
            <div className="grid grid-cols-12 gap-2 text-[#6a6969] text-sm leading-8">
                <div className="col-span-3">
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notice</li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <ul>
                        <li>Gift Cards</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <button className="border border-gray-400 text-[#6a6969] text-[0.85rem] py-0.5 w-24 my-6">
                Service code
            </button>
            <p className="text-[#6a6969] text-xs">© 1997-2023 Netflix, Inc.</p>
        </div>
    );
};

export default Footer;