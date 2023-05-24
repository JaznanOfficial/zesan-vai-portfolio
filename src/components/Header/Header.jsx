"use client";

import Image from "next/image";
import React from "react";
import profilePic from "/src/assets/images/zesan.png";

const Header = () => {
    return (
        <div className="grid grid-cols-7 items-start justify-center gap-10 mx-auto">
            <div className="w-full bg-[#EEEEEF] p-[24px] md:h-[520px] col-span-7 md:col-span-5 ">
                <h1 className="text-[34px] font-bold leading-[48px]">
                    Hello! I’m Zesan H, a software designer with 6 years of experience.
                </h1>
                <p className="text-[28px] font-normal leading-[33.6px] mt-[16px] mb-[24px] ">
                    i create easy to use & minimal user experiences, design systems, and strategies.
                    where i turn complex ideas into human-friendly solutions. my interfaces are
                    using over 10 million happy users.
                </p>
                <p>
                    <span className="text-[#6B7280] text-[28px]">side-projects: </span>
                    <span className="text-black text-[28px]">
                        <a href="" className="underline" target="_blank">
                            ideateui,
                        </a>{" "}
                    </span>

                    <span className="text-black text-[28px]">
                        <a href="" className="underline" target="_blank">
                            ideateicons,
                        </a>{" "}
                    </span>

                    <span className="text-black text-[28px]">
                        <a href="" className="underline" target="_blank">
                            foodos,
                        </a>{" "}
                    </span>
                </p>
                <div className="flex flex-row md:mt-[150px] mt-5 justify-center md:justify-start">
                    <button className="text-[17px] text-white mx-1 md:mx-2 md:py-3 py-1 rounded-3xl bg-black md:px-5 px-3 cursor-pointer">
                        <i class="fa-solid fa-envelope"></i> Email me
                    </button>

                    <button className="text-[17px] mx-1 md:mx-2 md:py-3 py-1 rounded-3xl bg-[#E5E5E6] md:px-5 px-3 cursor-pointer border-2 border-black">
                        <i class="fa-brands fa-linkedin"></i> Linkedin
                    </button>
                </div>
            </div>
            <div className="w-full col-span-7 md:col-span-2 order-first md:order-last">
                <Image
                    alt="zesan img"
                    src={profilePic}
                    width={425}
                    height={492}
                    loading="lazy"
                    className="text-center"
                />
            </div>
        </div>
    );
};

export default Header;
