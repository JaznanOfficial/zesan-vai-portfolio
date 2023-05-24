"use client";

import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="my-5 p-5 md:py-36 bg-[#EEEEEF] w-full flex justify-center items-center">
                <div className="w-full mx-auto flex flex-col justify-center items-center">
                    <h1 className="md:text-8xl text-4xl text-center font-[500]">
                        Let’s build great products together....
                    </h1>
                    <button className="text-[17px] text-white mx-1 md:mx-2 md:py-3 py-2 rounded-3xl bg-black md:px-12 px-5 cursor-pointer mt-10 mb-5">
                        Connect
                    </button>
                    <div>
                        <a href="" className="underline font-bold">
                            Download my resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-5 md:justify-between">
                <div className="md:text-5xl text-3xl md:font-[500] font-normal">arianzesan</div>
                <div className="md:text-5xl text-3xl md:font-[500] font-normal mt-5 md:mt-0 text-center">
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-solid fa-m"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-behance"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-figma"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-dribbble"></i>
                    </a>
                    <a href="" target="_blank" className="m-3">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
