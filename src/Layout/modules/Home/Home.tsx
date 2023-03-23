import React from 'react';
import tiger from "../../../assets/video/video-real-state.mp4"

const Home = () => {
    return (
        <div className="relative">
            <video className="h-[40rem] object-cover w-full"
                   autoPlay loop muted controls={false}>
                <source src={tiger} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-10 px-2 sm:px-12 2xl:px-40 py-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6">
                        <div className="ml-3 font-mono">
                            <span
                                className="italic text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-yellow-600 tracking-widest">SG</span>
                            <br/>
                            <span
                                className="text-sm sm:text-4xl md:text-5xl font-semibold tracking-tighter text-black">SignatureGroup</span>
                            <span>
                            <p className="text-sm my-4 text-white">
                                At SG Signature Group, our experienced team is dedicated to helping you find your dream home or investment property.
                                Whether you're buying, selling, or renting, we have the knowledge and resources to help you achieve your real estate goals.
                                Contact us today to learn more.</p>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;