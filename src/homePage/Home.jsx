import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import bannerImg from '../assets/homeBan.png'
import star from '../assets/star 1.png'
import starTwo from '../assets/star 2.png'
import groupMan from '../assets/groupMan.png'
import { GoSearch } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section>
                <nav className="w-full bg-white ">
                    <div className="w-10/12 mx-auto flex items-center justify-between px-6 py-4">
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
                <div className="py-[5px]">
                  <div className="w-10/12 mx-auto">
                    <div className="lg:flex lg:justify-between">
                      <div className="lg:w-5/11">
                        <div className="bg-[#DDF1E6] p-[37px] rounded-[30px]">
                           <div className="relative">
                             <h2 className="text-[#183835] text-[74px] font-bold font-dm ">Elevate Your Living Experience</h2>
                             <img src={star} alt="" className="absolute top-[35px] right-[130px]"/>
                             <img src={starTwo} alt="" className="absolute top-[22px] right-[110px]"/>
                             <p className="text-[#183835] text-[20px] pt-[25px] font-normal font-dm opacity-[60%]">Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle. Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle.</p>
                           </div>
                           <div className="flex items-center mt-[40px] gap-x-[10px]">
                             <img src={groupMan} alt="" />
                             <p className="text-[#183835] text-[18px] font-dm font-medium">Trusted by 14M+ Customer</p>
                           </div>
                           <div className="mt-[30px] relative">
                             <input type="text" className="bg-[#FFFF] outline-0 py-[15px] lg:w-[580px] px-[33px] rounded-[23px] " placeholder="Search city, region or address..."/>
                             <CiSearch className="absolute top-[16px] left-[8px] text-[20px]" />
                             <a className="text-[#FFFFFF] bg-[#183835] font-dm text-[16px] py-[10px] px-[28px] rounded-[23px] absolute top-[4px] right-[75px] cursor-pointer ">Browse House’s</a>
                           </div>
                        </div>
                      </div>
                      <div className="lg:w-5/11">
                        <div className="">
                            <img src={bannerImg} alt="" className="w-full"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* banner part end */}
            </section>
        </>
    )
}

export default Home