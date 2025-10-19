import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section>
                <nav className="w-full bg-white ">
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <div className="text-2xl font-semibold text-gray-900">
                            <span className="font-bold">bd.</span>Real
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center space-x-8 text-gray-600">
                            <li className="hover:text-gray-900 cursor-pointer">Home</li>
                            <li className="hover:text-gray-900 cursor-pointer">Listings</li>
                            <li className="hover:text-gray-900 cursor-pointer">Services</li>
                            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                            <li className="hover:text-gray-900 cursor-pointer">Rent</li>
                            <li className="hover:text-gray-900 cursor-pointer">Sell</li>
                            <li className="hover:text-gray-900 cursor-pointer">Buy</li>
                        </ul>

                        {/* Contact Button */}
                        <button className="hidden md:block bg-[#133E36] text-white px-5 py-2 rounded-full hover:bg-[#0f302a] transition-all cursor-pointer">
                            Contact Us
                        </button>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                            {open ? <IoClose /> : <IoMenu />}
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {open && (
                        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
                            <ul className="flex flex-col space-y-3 text-gray-600">
                                <li className="hover:text-gray-900 cursor-pointer">Home</li>
                                <li className="hover:text-gray-900 cursor-pointer">Listings</li>
                                <li className="hover:text-gray-900 cursor-pointer">Services</li>
                                <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                                <li className="hover:text-gray-900 cursor-pointer">Rent</li>
                                <li className="hover:text-gray-900 cursor-pointer">Sell</li>
                                <li className="hover:text-gray-900 cursor-pointer font-dm">Buy</li>
                            </ul>
                            <button className="mt-4 w-full bg-[#133E36] text-white py-2 rounded-full ">
                                Contact Us
                            </button>
                        </div>
                    )}
                </nav>
                {/* navbar end */}
                <div className="">
                    
                </div>
            </section>
        </>
    )
}

export default Home